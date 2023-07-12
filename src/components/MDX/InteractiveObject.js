import PropTypes                                   from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
import styled             from 'styled-components';
import { PageContext }    from '../../pages/_app.js';
import { useForceUpdate } from '../../tools/hooks.js';
import Markdownify        from './Markdownify.js';




InteractiveObject.propTypes = {
  filename            : PropTypes.string.isRequired,
  fromCurrentDirectory: PropTypes.bool,
  children            : PropTypes.func,
  aspectRatio         : PropTypes.number,
  allowFullscreen     : PropTypes.bool,
  caption             : PropTypes.string
};


// dynamically load (from same directory as page) and embed a react applet
export default function InteractiveObject( { filename, fromCurrentDirectory = true, children = ( Component ) => <Component />, aspectRatio = 16 / 9, allowFullscreen = false, caption } ) {
  const { dir }     = useContext( PageContext );
  const forceUpdate = useForceUpdate();
  // store dynamically loaded component in ref because react doesn't like a
  // component being stored with useState
  const ref = useRef();

  // dynamically load component from provided filename
  useEffect( () => {
    if ( !filename ) {
      return;
    }

    let filepath = filename;

    if ( fromCurrentDirectory ) {
      filepath = dir.slice( 1 ) + filepath;
    }

    import(`/public/objects/${filepath}.js`)
    .then( ( module ) => ( ref.current = module ) )
    .then( forceUpdate )
    .catch( ( err ) => {
      console.error( `Couldn't find interactive "public/${filepath}.js"` );
      console.error( err );
    } );
  }, [ dir, fromCurrentDirectory, filename, forceUpdate ] );

  /*
   When creating an interactive, we don't want authors to have to
   worry too much about sizing. But in every location where the interactive
   is used, it should look good. So we allow specifying the desired aspect ratio
   as a prop, and then <Interactive> will scale the component being rendered
   to always fit the container.

   The rescaling algorithm is to set the container to full-width with the
   specified aspect ratio, and then to position the children in the center
   with full width. If that means the contents are too tall, they get
   scaled down until the height is correct.
   */
  const [ interactive, setInteractive ] = useState( null );
  const [ sizer, setSizer ]             = useState( null );
  const [ scale, setScale ]             = useState( 1 );
  useEffect( () => {
    if ( !( interactive && sizer ) ) {
      return;
    }

    const resize = () => {
      const outerBox = interactive.getBoundingClientRect();
      const innerBox = sizer.getBoundingClientRect();

      const newScale = Math.min(
        outerBox.height / innerBox.height,
        outerBox.width / innerBox.width
      );
      setScale( newScale );
    };

    resize();

    const resizeObserver = new ResizeObserver( () => {
      resize();
    } );
    resizeObserver.observe( interactive );
    resizeObserver.observe( sizer );

    return () => {
      resizeObserver.disconnect();
    };
  }, [ interactive, sizer ] );

  const [ fullscreen, setFullscreen ] = useState( false );


  useEffect( () => {
    if ( fullscreen ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [ fullscreen ] );

  if ( aspectRatio === null ) {
    if ( sizer ) {
      const box   = sizer.getBoundingClientRect();
      aspectRatio = box.width / box.height;
    }
  }

  // if no component, don't render
  if ( !ref.current ) {
    return null;
  }

  const { default: defaultExport, ...otherExports } = ref.current;


  return (
    <InteractiveWrapper >
      <Interactive
        ref = {setInteractive}
        style = {{
          paddingTop: fullscreen ? undefined : `${( 1 / aspectRatio ) * 100}%`
        }}
        data-fullscreen = {fullscreen}
      >
        <InteractiveSizer ref = {setSizer} >
          <div style = {{ transform: `scale(${scale})` }} >
            {children( defaultExport, otherExports )}
          </div >
        </InteractiveSizer >

        {allowFullscreen && (
          <FullscreenButton onClick = {() => setFullscreen( !fullscreen )} >
            {fullscreen ? ( <i className = 'fas fa-compress-alt' /> ) : ( <i className = 'fas fa-expand-alt' /> )}
          </FullscreenButton >
        )}
      </Interactive >
      {caption && (
        <CaptionBlock >
          <Markdownify >{caption}</Markdownify >
        </CaptionBlock >
      )}
    </InteractiveWrapper >
  );
}



const InteractiveWrapper = styled.div`
  margin: 40px auto;
`;

const Interactive = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  background: $black;

  &[data-fullscreen="true"] {
    position: fixed;
    z-index: 100;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;

const InteractiveSizer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FullscreenButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  border: none;
`;

const CaptionBlock = styled.figcaption`
  margin: 20px 30px 0 30px;
  text-align: center;
  color: $gray-700;
  font-size: 0.9em;
`;

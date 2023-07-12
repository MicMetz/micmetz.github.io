import PropTypes     from 'prop-types';
import styled        from 'styled-components';
import ObjectSection from '../Grids/ObjectSection.js';




TopicHeader.propTypes = {
  topic: PropTypes.shape( {
    slug       : PropTypes.string.isRequired,
    name       : PropTypes.string.isRequired,
    description: PropTypes.string
  } )
};

export default function TopicHeader( { topic } ) {
  return (
    <ObjectSection width = 'narrow' dark = {true} style = {{ background: 'black' }} >
      <ImageWrapper >
        < TopicHeaderImage
          className = {styles.image}
          src = {topic.image}
          alt = ''
        />
      </ImageWrapper >

      <TopicHeaderText >
        <h1 id = {topic.slug} >{topic.name}</h1 >
        {topic.description && <div >{topic.description}</div >}
      </TopicHeaderText >
    </ObjectSection >
  );
}



const ImageWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
`;


const TopicHeaderImage = styled.img`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  user-select: none;
`;


const TopicHeaderText = styled.div`
  position: relative;
  text-shadow: 0 2px 8px black;
  padding: 0 100px;
  line-height: 1.5;

  h1 {
    margin-bottom: 12px;
  }

  @media (max-width: 600px) {
    padding: 0 20px;

    :before, :after {
      display: none;
    }
  }
`;

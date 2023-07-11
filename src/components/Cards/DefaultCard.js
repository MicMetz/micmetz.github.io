import { motion } from 'framer-motion';
import Link       from 'next/link';




export default function Card( { post } ) {
  const { title, description, type, image } = post.data;

  return (
    <Link as = {`${post.filePath.replace( /\.mdx?$/, '' )}`} href = {`[slug]`} >
      <a >
        <motion.li
          variants = {{
            hidden: { opacity: 0, y: 50 },
            show  : { opacity: 1, y: 0 }
          }}
          className = 'md:max-w-sm max-w-md mr-6 mb-6 bg-offWhite px-6 py-5 rounded-md shadow-sm flex flex-col h-min transform hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out'
          key = {post.filePath}
        >
          {image && <img src = {image} />}
          <h3 className = 'text-xl leading-tight mb-4 hover:text-purple' >
            {title}
          </h3 >

          <p className = 'text-small font-body font-motion.light text-mediumBlue leading-snug mb-4' >
            {description}
          </p >
          <div className = 'text-micro font-body font-bold uppercase w-min pt-2 text-sky tracking-wide flex flex-row items-center self-end justify-self-end' >
            {type === 'pattern' ? (
                <>
                  <svg
                    xmlns = 'http://www.w3.org/2000/svg'
                    className = 'h-4 w-4 mr-1 text-purple'
                    viewBox = '0 0 20 20'
                    fill = 'currentColor'
                  >
                    <path
                      fillRule = 'evenodd'
                      d = 'M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z'
                      clipRule = 'evenodd'
                    />
                    <path d = 'M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z' />
                  </svg >
                  <span className = 'text-purple' >Pattern</span >
                </>
              ) :
              type === 'lesson' ? (
                  <>
                    <svg
                      xmlns = 'http://www.w3.org/2000/svg'
                      className = 'h-4 w-4 mr-1 text-purple'
                      viewBox = '0 0 20 20'
                      fill = 'currentColor'
                    >
                      <path
                        fillRule = 'evenodd'
                        d = 'M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
                        clipRule = 'evenodd'
                      />
                    </svg >
                    {' '}
                    <span className = 'text-purple' >Lesson</span >
                  </>
                ) :
                type === 'experiment' ? (
                    <>
                      <svg
                        xmlns = 'http://www.w3.org/2000/svg'
                        className = 'h-4 w-4 mr-1 text-purple'
                        viewBox = '0 0 20 20'
                        fill = 'currentColor'
                      >
                        <path
                          fillRule = 'evenodd'
                          d = 'M10 2a1 1 0 011 1v1h2a1 1 0 011 1v2a1 1 0 01-1 1h-1v2a1 1 0 01-1 1H9v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1H4a1 1 0 01-1-1V7a1 1 0 011-1h1V4a1 1 0 011-1h2V2a1 1 0 011-1zm1 9a1 1 0 100 2 1 1 0 000-2zM9 8a1 1 0 100 2 1 1 0 000-2zm2-3a1 1 0 100 2 1 1 0 000-2zm-3 1a1 1 0 100 2 1 1 0 000-2zm3 5a1 1 0 100 2 1 1 0 000-2zM6 7a1 1 0 100 2 1 1 0 000-2zm5 5a1 1 0 100 2 1 1 0 000-2zm-2-5a1 1 0 100 2 1 1 0 000-2z'
                          clipRule = 'evenodd'
                        />
                      </svg >
                      {' '}
                      <span className = 'text-purple' >Experiment</span >
                    </>
                  )
                  : (
                    <>
                      <svg
                        xmlns = 'http://www.w3.org/2000/svg'
                        className = 'h-4 w-4 mr-1 text-purple'
                        viewBox = '0 0 20 20'
                        fill = 'currentColor'
                      >
                        <path
                          fillRule = 'evenodd'
                          d = 'M10 2a1 1 0 011 1v1h2a1 1 0 011 1v2a1 1 0 01-1 1h-1v2a1 1 0 01-1 1H9v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1H4a1 1 0 01-1-1V7a1 1 0 011-1h1V4a1 1 0 011-1h2V2a1 1 0 011-1zm1 9a1 1 0 100 2 1 1 0 000-2zM9 8a1 1 0 100 2 1 1 0 000-2zm2-3a1 1 0 100 2 1 1 0 000-2zm-3 1a1 1 0 100 2 1 1 0 000-2zm3 5a1 1 0 100 2 1 1 0 000-2zM6 7a1 1 0 100 2 1 1 0 000-2zm5 5a1 1 0 100 2 1 1 0 000-2zm-2-5a1 1 0 100 2 1 1 0 000-2z'
                          clipRule = 'evenodd'
                        />
                      </svg >
                      {' '}
                      <span className = 'text-purple' ></span >
                    </>
                  )}

          </div >
        </motion.li >
      </a >
    </Link >
  );
}

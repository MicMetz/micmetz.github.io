import { motion }                                                                                                from 'framer-motion';
import fs                                                                                                        from 'fs';
import matter                                                                                                    from 'gray-matter';
import path                                                                                                      from 'path';
import { useState }                                                                                              from 'react';
import Card                                                                                                      from '../../components/Cards/DefaultCard.js';
import Layout                                                                                                    from '../../components/Layouts/Layout.js';
import FilterMenu                                                                                                from '../../components/MISC/FilterMenu.js';
import { experimentFilePaths, EXPERIMENTS_PATH, lessonFilePaths, LESSONS_PATH, patternFilePaths, PATTERNS_PATH } from '../../tools/mdxUtils.js';




export default function DesignWorkshop( { posts } ) {
  const [ filter, setFilter ] = useState( 'all' );
  const postsToShow           = filter === 'all' ? posts : posts.filter( ( post ) => post.type.includes( filter ) );


  return (
    <>
      <Layout
        title = 'Design Workshop'
        description = 'A collection of various design patterns and experiments by Michael Metzger'
      >
        <div className = {'mt-16 md:mt-20 xl:px-20'} >
          <div className = {'flex flex-row justify-between '} >
            <motion.div
              className = 'mb-8'
              initial = 'hidden'
              animate = 'visible'
              variants = {{
                hidden : { opacity: 0, y: -50 },
                visible: {
                  opacity   : 1,
                  y         : 0,
                  transition: {
                    delay   : 0.3,
                    ease    : 'easeInOut',
                    duration: 0.7
                  }
                }
              }}
            >
              <h1 className = {'sm:text-5xl mb-8 font-bold'} >
                The Design Workshop
              </h1 >
              <h2 className = {'text-xl max-w-5xl leading-tight text-mediumBlue font-light'} >
                A collection of various design patterns and experiments by Michael Metzger
              </h2 >
            </motion.div >
          </div >
          <motion.div >
            <FilterMenu filter = {filter} setFilter = {setFilter} />
          </motion.div >
          <motion.ul
            initial = 'hidden'
            animate = 'show'
            variants = {{
              hidden: { opacity: 0 },
              show  : {
                opacity   : 1,
                transition: {
                  delay          : 0.8,
                  ease           : 'easeInOut',
                  staggerChildren: 0.2,
                  duration       : 0.9
                }
              }
            }}
            className = {'flex flex-wrap mt-6 justify-center md:justify-start'}
          >
            {postsToShow.map( ( post, i ) => (
              <Card
                key = {i}
                id = {i}
                type = {post.type}
                title = {post.title}
                description = {post.description}
                slug = {post.slug}
                topics = {post.topics}
                date = {post.updated}
                data = {post}
              />
            ) )
            }
          </motion.ul >
        </div >
      </Layout >
    </>
  );
}



export function getStaticProps() {
  let patterns = patternFilePaths.map( ( filePath ) => {
      const source                                                     = fs.readFileSync( path.join( PATTERNS_PATH, filePath ) );
      const { content, data }                                          = matter( source );
      const slug                                                       = filePath.replace( /\.mdx$/, '' );
      const { title, description, growthStage, topics, type, updated } = data;

      return {
        content,
        title,
        description,
        growthStage,
        topics,
        type,
        updated,
        slug,
        filePath
      };
    }
  );

  let lessons = lessonFilePaths.map( ( filePath ) => {
      const source                                                     = fs.readFileSync( path.join( LESSONS_PATH, filePath ) );
      const { content, data }                                          = matter( source );
      const slug                                                       = filePath.replace( /\.mdx$/, '' );
      const { title, description, growthStage, topics, type, updated } = data;

      return {
        content,
        title,
        description,
        growthStage,
        topics,
        type,
        updated,
        slug,
        filePath
      };
    }
  );

  let experiments = experimentFilePaths.map( ( filePath ) => {
      const source                                                     = fs.readFileSync( path.join( EXPERIMENTS_PATH, filePath ) );
      const { content, data }                                          = matter( source );
      const slug                                                       = filePath.replace( /\.mdx$/, '' );
      const { title, description, growthStage, topics, type, updated } = data;

      return {
        content,
        title,
        description,
        growthStage,
        topics,
        type,
        updated,
        slug,
        filePath
      };
    }
  );


  const allPosts = [ ...patterns, ...lessons, ...experiments ];
  return {
    props: {
      posts: allPosts
    }
  };
}

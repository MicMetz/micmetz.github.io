const fs   = require( 'fs' );
const path = require( 'path' );


const ESSAYS_PATH    = path.join( process.cwd(), 'posts', 'essays' );
const essayFilePaths = fs
.readdirSync( ESSAYS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const NOTES_PATH    = path.join( process.cwd(), 'posts', 'notes' );
const noteFilePaths = fs
.readdirSync( NOTES_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const EXPERIMENTS_PATH    = path.join( process.cwd(), 'posts', 'experiments' );
const experimentFilePaths = fs
.readdirSync( EXPERIMENTS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const LESSONS_PATH    = path.join( process.cwd(), 'posts', 'lessons' );
const lessonFilePaths = fs
.readdirSync( LESSONS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const PATTERNS_PATH    = path.join( process.cwd(), 'posts', 'patterns' );
const patternFilePaths = fs
.readdirSync( PATTERNS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

// const RESOURCES_PATH    = path.join( process.cwd(), 'posts', 'resources' );
// const resourceFilePaths = fs
// .readdirSync( RESOURCES_PATH )
// .filter( ( path ) => /\.mdx?$/.test( path ) );


module.exports = {
  essayFilePaths,
  experimentFilePaths,
  lessonFilePaths,
  patternFilePaths,
  noteFilePaths,
  // resourceFilePaths,
  //
  // RESOURCES_PATH,
  ESSAYS_PATH,
  NOTES_PATH,
  EXPERIMENTS_PATH,
  LESSONS_PATH,
  PATTERNS_PATH
};


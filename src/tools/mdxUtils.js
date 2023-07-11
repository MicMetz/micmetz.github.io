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

const PATTERNS_PATH   = path.join( process.cwd(), 'posts', 'patterns' );
const patternFilePaths = fs
.readdirSync( PATTERNS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );



module.exports = {
  essayFilePaths,
  noteFilePaths,
  ESSAYS_PATH,
  NOTES_PATH,
  experimentFilePaths,
  lessonFilePaths,
  patternFilePaths,
  EXPERIMENTS_PATH,
  LESSONS_PATH,
  PATTERNS_PATH
};


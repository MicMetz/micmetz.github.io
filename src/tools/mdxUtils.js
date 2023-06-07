// const fs = require( "fs" );
const path = require( "path" );
const { readdirSync } = require( "fs" );



// ESSAYS_PATH is useful when you want to get the path to a specific file
const ESSAYS_PATH = path.join( process.cwd(), "posts", "essays" );

const essayFilePaths = readdirSync( ESSAYS_PATH )
// Only include MDX files
.filter( ( path ) => /\.mdx?$/.test( path ) );

const NOTES_PATH = path.join( process.cwd(), "posts", "notes" );

const noteFilePaths = readdirSync( NOTES_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const PATTERNS_PATH = path.join( process.cwd(), "posts", "patterns" );

const patternFilePaths = readdirSync( PATTERNS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const PROJECTS_PATH = path.join( process.cwd(), "posts", "projects" );

const projectFilePaths = readdirSync( PROJECTS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

module.exports = {
		essayFilePaths,
		noteFilePaths,
		projectFilePaths,
		patternFilePaths,
		PATTERNS_PATH,
		ESSAYS_PATH,
		NOTES_PATH,
		PROJECTS_PATH,
};


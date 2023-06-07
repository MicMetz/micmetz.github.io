const fs = require( "fs" );
const path = require( "path" );



const ESSAYS_PATH = path.join( process.cwd(), "posts", "essays" );
const essayFilePaths = fs
.readdirSync( ESSAYS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const NOTES_PATH = path.join( process.cwd(), "posts", "notes" );
const noteFilePaths = fs
.readdirSync( NOTES_PATH )

const PATTERNS_PATH = path.join( process.cwd(), "posts", "patterns" );
const patternFilePaths = fs
.readdirSync( PATTERNS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const PROJECTS_PATH = path.join( process.cwd(), "posts", "projects" );
const projectFilePaths = fs
.readdirSync( PROJECTS_PATH )
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


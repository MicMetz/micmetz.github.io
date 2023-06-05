const fs = require( "fs" );
const path = require( "path" );



const LABOR_PATH = path.join( process.cwd(), "posts", "labors" );
const laborFilePaths = fs
.readdirSync( LABOR_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const LABORNOTES_PATH = path.join( process.cwd(), "posts", "laborNotes" );
const laborNoteFilePaths = fs
.readdirSync( LABORNOTES_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

// ESSAYS_PATH is useful when you want to get the path to a specific file
const ESSAYS_PATH = path.join( process.cwd(), "posts", "essays" );
const essayFilePaths = fs
.readdirSync( ESSAYS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const NOTES_PATH = path.join( process.cwd(), "posts", "notes" );
const noteFilePaths = fs
.readdirSync( NOTES_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const PATTERNS_PATH = path.join( process.cwd(), "posts", "patterns" );
const patternFilePaths = fs
.readdirSync( PATTERNS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const PROJECTS_PATH = path.join( process.cwd(), "posts", "projects" );
const projectFilePaths = fs
.readdirSync( PROJECTS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

module.exports = {
		laborFilePaths,
		laborNoteFilePaths,
		essayFilePaths,
		noteFilePaths,
		projectFilePaths,
		patternFilePaths,
		LABOR_PATH,
		LABORNOTES_PATH,
		PATTERNS_PATH,
		ESSAYS_PATH,
		NOTES_PATH,
		PROJECTS_PATH,
};

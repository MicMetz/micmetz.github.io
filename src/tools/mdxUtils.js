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

const RESPONSES_PATH = path.join( process.cwd(), "posts", "responses" );
const responsesFilePaths = fs
.readdirSync( RESPONSES_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const PROJECTS_PATH = path.join( process.cwd(), "posts", "projects" );
const projectFilePaths = fs
.readdirSync( PROJECTS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

module.exports = {
		laborFilePaths,
		LABOR_PATH,

		laborNoteFilePaths,
		LABORNOTES_PATH,

		essayFilePaths,
		ESSAYS_PATH,

		noteFilePaths,
		NOTES_PATH,

		responsesFilePaths,
		RESPONSES_PATH,

		projectFilePaths,
		PROJECTS_PATH,

};

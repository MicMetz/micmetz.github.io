const fs = require( "fs" );
const path = require( "path" );



// ESSAYS_PATH is useful when you want to get the path to a specific file
const ESSAYS_PATH = path.join( process.cwd(), "posts", "essays" );
const essayFilePaths = fs
.readdirSync( ESSAYS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const NOTES_PATH = path.join( process.cwd(), "posts", "notes" );
const noteFilePaths = fs
.readdirSync( NOTES_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

const PROJECTS_PATH = path.join( process.cwd(), "posts", "projects" );
const projectFilePaths = fs
.readdirSync( PROJECTS_PATH )
.filter( ( path ) => /\.mdx?$/.test( path ) );

module.exports = {

		essayFilePaths,
		ESSAYS_PATH,

		noteFilePaths,
		NOTES_PATH,

		projectFilePaths,
		PROJECTS_PATH

};

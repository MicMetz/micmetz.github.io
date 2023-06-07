import fs from "fs";
import path from "path";

import { ESSAYS_PATH, NOTES_PATH, RESPONSES_PATH } from "./mdxUtils.js";

// Get Post based on Slug
export const getPostdata = async ( slug ) => {
		const essays = fs.readdirSync( ESSAYS_PATH );
		const notes = fs.readdirSync( NOTES_PATH );
		const responses = fs.readdirSync( RESPONSES_PATH );

		let post;
		if ( essays.includes( slug + ".MDX" ) ) {
				post = fs.readFileSync( path.join( ESSAYS_PATH, slug + ".MDX" ), "utf8" );
		} else if ( notes.includes( slug + ".MDX" ) ) {
				post = fs.readFileSync( path.join( NOTES_PATH, slug + ".MDX" ), "utf8" );
		} else if ( responses.includes( slug + ".MDX" ) ) {
				post = fs.readFileSync( path.join( RESPONSES_PATH, slug + ".MDX" ), "utf8" );
		}

		return post;
};

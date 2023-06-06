import fs from "fs";
import path from "path";

import { ESSAYS_PATH, NOTES_PATH } from "./mdxUtils.js";

// Get Post based on Slug
export const getPostdata = async ( slug ) => {
		const essays = fs.readdirSync( ESSAYS_PATH );
		const notes = fs.readdirSync( NOTES_PATH );
		const responses = fs.readdirSync( RESOURCES_PATH );

		let post;
		if ( essays.includes( slug + ".mdx" ) ) {
				post = fs.readFileSync( path.join( ESSAYS_PATH, slug + ".mdx" ), "utf8" );
		} else if ( notes.includes( slug + ".mdx" ) ) {
				post = fs.readFileSync( path.join( NOTES_PATH, slug + ".mdx" ), "utf8" );
		} else if ( responses.includes( slug + ".mdx" ) ) {
				post = fs.readFileSync( path.join( RESOURCES_PATH, slug + ".mdx" ), "utf8" );
		}

		return post;
};

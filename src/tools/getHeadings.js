export async function getHeadings( source ) {
  // Get each line individually, and filter out anything that
  // isn't a heading.
  const headingLines = source.split( '\n' ).filter( ( line ) => {
    return line.match( /^###*\s/ ) || line.match( /^<h[1-6]/ );
  } );
  // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'
  return headingLines.map( ( raw ) => {
    const text = raw.replace( /^###*\s/, '' )
    .replace( /^<h[1-6][^>]*>/, '' )
    .replace( /<\/h[1-6]>/, '' )
    .replace( '</h1 >', '' )
    .replace( '</h2 >', '' )
    .replace( '</h3 >', '' )
    .replace( '</h4 >', '' )
    .replace( '</h5 >', '' )
    .replace( '</h6 >', '' );

    const level = raw.match( /^###*\s/ ) ? raw.match( /^###*\s/ )[ 0 ].length : parseInt( raw.match( /^<h([1-6])/ )[ 1 ] );
    return { text, level };
  } );
}

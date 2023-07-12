/**
 * @author 3Blue1Brown / https://github.com/3b1b/3Blue1Brown.com
 * @original 3Blue1Brown / https://github.com/3b1b/3Blue1Brown.com
 */

import { bucket } from '../../data/site.yaml';

// change provided srcs (png & mp4) to external bucket location for production.
export const transformSrc = ( src, dir = '' ) => {
  if ( src.endsWith( '.mp4' ) ) {
    // Safari
    src = src + '#t=0.001';
  }
  if ( src.startsWith( 'http' ) ) {
    return src;
  } else if (
    process.env.NODE_ENV === 'production' &&
    process.env.NEXT_PUBLIC_NETLIFY_CONTEXT === 'production' && // Not a deploy preview
    !src.endsWith( 'svg' )
  ) {
    return bucket + dir + src;
  } else {
    return dir + src;
  }
};

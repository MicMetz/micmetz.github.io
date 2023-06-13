import {
  BookAtrribution,
  BookByline,
  BookCoverImage,
  BookSubtitle,
  BookTagline,
  BookTitle
}                                     from "../../styles/BookStyledComponents.js";
import { LibraryBookStyledComponent } from "../../styles/LibraryStyledComponents.js";
import { ReadmoreLink }               from "../../styles/LinkStyledComponents.js";
import { DescriptionParser }          from "../../tools/DescriptionParser.js";



export default function LibraryBookCard( { book, index } ) {
  return (
    <LibraryBookStyledComponent key = {index} value = {book} id = {index} innerRef = {c => this.myRef = c} >
      {DescriptionParser( book )}
      <BookAtrribution >
        <BookTitle >{book.header.title}</BookTitle >
        <BookSubtitle >{book.header.subtitle}</BookSubtitle >
        <BookByline >{book.author}</BookByline >
      </BookAtrribution >
      {book.cover && (
        <BookCoverImage src = {book.cover} alt = {book.header.title} />
      )}
      <BookTagline >
        <ul >
          <li >
            <ReadmoreLink href = {book.link} target = "blank" >Read More</ReadmoreLink >
          </li >
          {book.tags.map( ( tag, id ) => {
            return (
              <li key = {id} >
                <ReadmoreLink href = {tag.link} target = "blank" >{tag.name}</ReadmoreLink >
              </li >
            )
          } )}
        </ul >
      </BookTagline >
    </LibraryBookStyledComponent >
  );


}

import React from 'react';

function Book({ book }) {
  // const { volumeInfo } = book;
  // publisher will be array
  const { author_name, title, title_suggest, title_sort,publisher } = book;

  return (
    <div className="book">
      {/* {imageLinks?.thumbnail && (
        <img src={imageLinks.thumbnail} alt={`${title} cover`} />
      )} */}
      <h3>{title}</h3>
      <p>Author(s): {author_name ? author_name[0] : 'Unknown'}</p>
      {/* <p>{description ? `${description.substring(0, 100)}...` : 'No description available'}</p> */}
      <p>{title_suggest}</p>
      <p>{title_sort}</p>
      <p>{(publisher)?publisher[0]:null}</p>
    </div>
  );
}

export default Book;

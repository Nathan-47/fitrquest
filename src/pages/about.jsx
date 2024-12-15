"use strict";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const About = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/getBook')
      .then(books => setBooks(books.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
          </tr>
        </thead>
        <tbody>
  {
    
    books.map((book) => {
        console.log(books)
      return (
        <tr>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.pages} {book.page}</td>
        </tr>
      );
    })
  }
</tbody>

      </table>
    </div>
  );
  
};

export default About;

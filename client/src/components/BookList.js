import React, { Component } from "react";

import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
  displayBooks() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading...</div>;
    } else {
      return data.books.map((book) => {
        return <li>{book.name} </li>;
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div id="main">
        My 1st booklist
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

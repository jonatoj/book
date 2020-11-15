import React from "react";
import BookResultItem from "./BookResultItem";
import Loader from "../assets/loader.svg";

function BookResults({ results, loading }) {
  const listOfResults = results.map((book) => {
    return <BookResultItem key={book.id} book={book} />;
  });

  const loadingOrEmpty = loading ? (
    <img src={Loader} alt="loading" />
  ) : (
    <p className="text-gray-700">No results</p>
  );

  return (
    <div className="flex items-center justify-center h-full">
      {results.length > 0 ? (
        <div id="results" className="max-w-960 w-full">
          {listOfResults}
        </div>
      ) : (
        loadingOrEmpty
      )}
    </div>
  );
}

BookResults.defaultProps = {
  results: [],
  loading: false,
};

export default BookResults;

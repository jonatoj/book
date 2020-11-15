import React, { useState } from "react";

import FormSelect from "./FormSelect";

function SearchForm({ updateResults, updateLoading }) {
  const [query, setQuery] = useState("");
  const [selectedPrintType, setSelectedPrintType] = useState("all");
  const [selectedBookType, setSelectedBookType] = useState("none");

  const printTypeOptions = {
    all: "All",
    books: "Books",
    magazines: "Magazines",
  };

  const bookTypeOptions = {
    none: "No Filter",
    "free-ebooks": "Free eBooks",
    "paid-ebooks": "Paid eBooks",
  };

  const getParams = () => {
    const params = {
      q: query.toLowerCase().replace(/ /g, "+"),
    };

    if (selectedPrintType !== "all") {
      params.printType = selectedPrintType;
    }

    if (selectedBookType !== "none") {
      params.filter = selectedBookType;
    }

    return Object.keys(params)
      .map((param) => `${param}=${params[param]}`)
      .join("&");
  };

  const onFormSubmit = async (e, query) => {
    e.preventDefault();

    updateResults([]);
    updateLoading(true);

    const params = getParams();

    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?${params}`
    );
    const resJSON = await res.json();

    updateResults(resJSON.items);
    updateLoading(false);
  };

  return (
    <form
      className="bg-gray-700 w-full p-4 flex flex-col md:flex-row"
      onSubmit={(e) => onFormSubmit(e, query)}
    >
      <input
        className="block px-4 py-2 w-full md:w-64 bg-gray-800 rounded-lg placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
        type="text"
        aria-label="Search"
        placeholder="Search"
        required
        onChange={(e) => setQuery(e.target.value)}
      />
      <FormSelect
        label="Print Type"
        options={printTypeOptions}
        updateSelected={setSelectedPrintType}
      />
      <FormSelect
        label="Book Type"
        options={bookTypeOptions}
        updateSelected={setSelectedBookType}
      />
      <button
        type="submit"
        className="mt-4 md:mt-0 md:ml-4 bg-gray-800 text-white hover:bg-gray-900 rounded px-4 py-2"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;

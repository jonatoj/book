import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import BookResults from "./components/BookResults";

class App extends Component {
  state = {
    results: [],
    query: "",
    loading: false,
  };

  updateResults = (results) => {
    this.setState({ results });
  };

  updateLoading = (value) => {
    this.setState({ loading: value });
  };

  render() {
    return (
      <div className="App min-h-screen">
        <header className="bg-black min-h-56 flex items-center justify-center">
          <h1 className="p-4 text-center text-5xl text-gray-300 font-bold tracking-wide">
            Google Book Search
          </h1>
        </header>
        <SearchForm
          updateResults={this.updateResults}
          updateLoading={this.updateLoading}
        />
        <main className="px-6">
          <BookResults
            results={this.state.results}
            loading={this.state.loading}
          />
        </main>
      </div>
    );
  }
}

export default App;

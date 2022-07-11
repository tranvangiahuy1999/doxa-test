import React from "react";
import IntroBanner from "../components/search-page/intro-banner/IntroBanner";
import SortBar from "../components/search-page/sort-bar/SortBar";
import ThreadItem from "../components/search-page/thread-items/ThreadItems";

function SearchPage() {
  return (
    <div>
      <IntroBanner />
      <div className="thread-list">
        <SortBar />
        <ThreadItem />
      </div>
    </div>
  );
}

export default SearchPage;

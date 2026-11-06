import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PhotoList from "./PhotoList";

// fetches photos for the word in the URL
function SearchResults({ fetchData, photos, loading }) {
  // Get the search word from the URL, like "mountains"
  const { query } = useParams();

  // Run whenever the search word in the URL changes
  useEffect(() => {
    // Fetch photos for that word
    fetchData(query);

    // Tell the linter we only want to re-run when the word changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // Show the photos with a title that includes the word
  return (
    <PhotoList
      photos={photos}
      title={`Results for "${query}"`}
      loading={loading}
    />
  );
}

export default SearchResults;

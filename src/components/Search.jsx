import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Search gets the fetchData function from App as a prop
function Search({ fetchData }) {
  // Store the text typed in the box, starting empty
  const [query, setQuery] = useState("");

  // Get the function that moves the user to a new route
  const navigate = useNavigate();

  // Runs when the form is submitted
  const handleSubmit = (e) => {
    // Stop the page from reloading
    e.preventDefault();

    // Ask App to fetch photos for the typed text
    fetchData(query);

    // Send the user to the search route for that text
    navigate(`/search/${query}`);

    // Clear the box for the next search
    setQuery("");
  };

  // Form for the UI
  return (
    // Run handleSubmit when the form is submitted
    <form className="search-form" onSubmit={handleSubmit}>
      {/* The text box shows the saved query */}
      <input
        type="search"
        name="search"
        placeholder="Search"
        required
        // Show the current text from state
        value={query}
        // Update state every time the user types
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default Search;

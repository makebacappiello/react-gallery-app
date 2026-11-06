import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "./components/Search";
import PhotoList from "./components/PhotoList";
import apiKey from "./config";

function App() {
  // Store the photos for each page, starting as empty lists
  const [catPhotos, setCatPhotos] = useState([]);
  const [dogPhotos, setDogPhotos] = useState([]);
  const [computerPhotos, setComputerPhotos] = useState([]);
  const [searchPhotos, setSearchPhotos] = useState([]);

  // Track whether a fetch is still running, starting as true
  const [loading, setLoading] = useState(true);

  // Fetch photos from Pixabay for any search word
  const fetchData = (query) => {
    // Turn loading on before the request starts
    setLoading(true);

    // Return the fetch so other code can wait for the photos
    return (
      fetch(
        // Pixaby address using my api and the query
        `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&per_page=24`
      )
        // Turn the response into a JavaScript object
        .then((response) => response.json())

        // Keep only the list of photos
        .then((data) => data.hits)

        // Errors handling
        .catch((error) => {
          // Show the problem in the console
          console.log("There was an Error fetching data", error);

          // Give back an empty list so the app keeps working
          return [];
        })
        // Runs at the end, whether the fetch worked or failed
        .finally(() => {
          // Turn loading off now that the request is done
          setLoading(false);
        })
    );
  };

  // Run once when the app first loads
  useEffect(() => {
    // Fetch cat photos and save in state
    fetchData("cats").then(setCatPhotos);
    // Fetch dog photos and save in state
    fetchData("dogs").then(setDogPhotos);
    // Fetch computer photos and save in state
    fetchData("computers").then(setComputerPhotos);
    // The empty list means this only runs one time
  }, []);

  //Page layout
  return (
    <div className="container">
      {/* Search box is visible on every route */}
      {/* Pass fetchData and save the results in searchPhotos */}
      <Search fetchData={(query) => fetchData(query).then(setSearchPhotos)} />
      {/* Nav links are visible on every route */}
      <Nav />
      {/* Show "Loading..." while a fetch is running */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          {/* Home route sends the user to the first topic */}
          <Route path="/" element={<Navigate to="/cats" />} />
          {/* Each topic route shows its own photos and title */}
          <Route
            path="/cats"
            element={<PhotoList photos={catPhotos} title="Cats" />}
          />
          <Route
            path="/dogs"
            element={<PhotoList photos={dogPhotos} title="Dogs" />}
          />
          <Route
            path="/computers"
            element={<PhotoList photos={computerPhotos} title="Computers" />}
          />
          {/* Search route shows the search results */}
          <Route
            path="/search/:query"
            element={<PhotoList photos={searchPhotos} title="Search Results" />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;

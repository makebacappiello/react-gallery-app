import Photo from "./Photo";

// Takes photos, a title and a loading flag
function PhotoList({ photos, title, loading }) {
  return (
    // The box that holds the title and the images
    <div className="photo-container">
      {/* Show the page title above the images */}
      <h2>{title}</h2>

      {/* If a fetch is running, show a loading message */}
      {loading ? (
        <p>Loading...</p>
      ) : photos.length > 0 ? (
        // If there are photos, show the list of images
        <ul>
          {/* Loop over the photos and make one Photo for each */}
          {photos.map((photo) => (
            // The key must be unique, so we use the photo's id
            <Photo key={photo.id} photo={photo} />
          ))}
        </ul>
      ) : (
        // If the list is empty, tell the user nothing matched
        <p>No matches found. Try a different search word.</p>
      )}
    </div>
  );
}

export default PhotoList;

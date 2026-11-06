import Photo from "./Photo";

//  takes photos, a loading flag and a page title
function PhotoList({ photos, title, loading }) {
  return (
    <div className="photo-container">
      {/* Show the page title above the images */}
      <h2>{title}</h2>

      {/* If a fetch is running, show a loading message */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Otherwise show the list of images
        <ul>
          {/* Loop over the photos and make one Photo for each */}
          {photos.map((photo) => (
            // The key must be unique, so we use the photo's id
            <Photo key={photo.id} photo={photo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default PhotoList;

import Photo from "./Photo";

//  takes an array of photos and a page title
function PhotoList({ photos, title }) {
  return (
    <div className="photo-container">
      {/* Show the page title above the images */}
      <h2>{title}</h2>
      <ul>
        {/* Loop over the photos and make one Photo for each */}
        {photos.map((photo) => (
          // The key must be unique, so we use the photo's id
          <Photo key={photo.id} photo={photo} />
        ))}
      </ul>
    </div>
  );
}

export default PhotoList;

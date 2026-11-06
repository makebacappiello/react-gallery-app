// Photo component shows one image inside a list item
function Photo({ photo }) {
  // Build the list item with the image inside it
  return (
    <li>
      {/* Use the small image URL from Pixabay and its tags as alt text */}
      <img src={photo.webformatURL} alt={photo.tags} />
    </li>
  );
}

export default Photo;

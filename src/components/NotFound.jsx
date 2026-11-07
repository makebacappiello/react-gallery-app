// NotFound component: shown when the URL matches no route
function NotFound() {
  // Build the friendly 404 message
  return (
    // Reuse the same box style as the photo pages
    <div className="photo-container">
      {/* Message so the user knows what happened */}
      <h2>404: Page Not Found</h2>
      {/* Explain the problem in a friendly way */}
      <p>
        Sorry, the page you are looking for could not be found. Please try one
        of the links above.
      </p>
    </div>
  );
}

export default NotFound;

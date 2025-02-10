import PropTypes from 'prop-types';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img 
        src={src || "news.jpg"} 
        style={{ height: "200px", width: "100%" }} 
        className="card-img-top" 
        alt={title || "News Image"} // Improved alt text for accessibility
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No Title Available"}
        </h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "No description available."}
        </p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

// PropTypes for type checking
NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string.isRequired, // URL is required for the link
};

export default NewsItem; // ✅ Default export

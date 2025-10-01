import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import "./Blogs.css";
// import Loading from "@/components/Loading/page";

const Blogs = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  // Fetch and filter blogs on searchText change
  useEffect(() => {
    setLoading(true);
    fetch("/blog.json")
      .then((res) => res.json())
      .then((result) => {
        const match = result.filter((p) =>
          p.title?.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResult(match);
        setTimeout(() => setLoading(false), 500); // Optional delay
      })
      .catch((error) => {
        console.error("Failed to fetch blog data:", error);
        setLoading(false);
      });
  }, [searchText]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleBlog = (id) => {
    navigate(`/blog/${id}`);
  };

  const tagsList = ["web-development", "app-development", "Marketing", "programming", "AI"];

  return (
    <div className="container my-5 ">
      {/* Search Bar */}
      <div className="d-flex justify-content-center mb-4 ">
        <input
          type="text"
          className="form-control w-50 blogSection"
          placeholder="🔍 Search blogs..."
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      {/* Filter Buttons */}
      <div className="mb-4">
        {tagsList.map((tag) => (
          <button
            key={tag}
            className={`btn btn-sm me-2 mb-2 ${
              tags === tag.toLowerCase() ? "btn-dark" : "btn-outline-secondary"
            }`}
            onClick={() => setTags(tag.toLowerCase())}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      {isLoading ? (
        <Loading />
      ) : searchResult.length === 0 ? (
        <p className="text-center text-muted">No blogs found.</p>
      ) : (
        <div className="row">
          {searchResult
            .filter((b) =>
              tags
                ? b.tags?.includes(tags) || b.categories?.includes(tags)
                : true
            )
            .map((blog) => (
              <div key={blog._id} className="col-sm-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={
                      blog.image?.startsWith("/")
                        ? blog.image
                        : "/images/default.jpg"
                    }
                    className="card-img-top"
                    alt={blog.title || "Blog image"}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text flex-grow-1">
                      {blog.content?.[0]?.text?.slice(0, 120) ??
                        "No content available"}
                      ...
                    </p>
                    <button
                      className="btn btn-dark mt-2"
                      onClick={() => handleBlog(blog._id)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;

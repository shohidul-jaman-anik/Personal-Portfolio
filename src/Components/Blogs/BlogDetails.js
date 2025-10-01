import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
// import Loading from "@/components/Loading/page";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await fetch("/blog.json");
        const blogs = await res.json();
        console.log("URL id:", id);
        console.log("Blogs fetched:", blogs);
        const foundBlog = blogs.find((b) => String(b.id || b._id) === id);
        console.log("Found blog:", foundBlog);
        setBlog(foundBlog || null);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };
    getBlog();
  }, [id]);

  if (isLoading) return <Loading />;

  if (!blog) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1 className="display-1 text-danger mb-4">404</h1>
          <p className="lead text-muted">
            Blog not found. It might have been moved or deleted.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="mb-4">
        <img
          src={blog.image || "/images/default.jpg"}
          alt={blog.title}
          className="img-fluid rounded shadow mb-3"
          style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
        />

        {/* Tags */}
        <div className="mb-3">
          {blog.tags?.map((tag) => (
            <span key={tag} className="badge bg-primary me-2">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="display-4 mb-3">{blog.title}</h1>

        {/* Author */}
        <div className="d-flex align-items-center gap-3">
          <div
            className="rounded-circle bg-light overflow-hidden d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            <img
              src="/images/logo/NeuronsNest_logo.png"
              alt="Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="mb-0 fw-medium">{blog.author.name}</p>
            <p className="mb-0 text-muted">{blog.author.email}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div>
        {blog.content.map((section, index) => (
          <section key={index} className="mb-4">
            {section.type && <h2 className="h4 mb-2">{section.type}</h2>}
            {section.text && <p>{section.text}</p>}
          </section>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="mt-5 pt-3 border-top">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
          <div>
            <p className="fw-medium mb-0">Written by {blog.author.name}</p>
            <p className="text-muted mb-0">{blog.author.email}</p>
          </div>
          <div>
            {blog.categories?.map((cat) => (
              <span key={cat} className="badge bg-secondary me-2 mb-1">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetailPage;

import Link from "next/link";
import React from "react";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with JavaScript",
      author: "Shakil Ahmed",
      category: "Programming",
      publishedDate: "2026-05-20",
      tags: ["JavaScript", "Web Development", "Beginner"],
      isPublished: true,
      views: 1250,
      content:
        "JavaScript is one of the most popular programming languages for web development...",
    },
    {
      id: 2,
      title: "Top 10 React Tips",
      author: "Nadia Khan",
      category: "Frontend",
      publishedDate: "2026-05-18",
      tags: ["React", "JavaScript", "UI"],
      isPublished: true,
      views: 980,
      content:
        "React makes building interactive user interfaces easier and faster...",
    },
    {
      id: 3,
      title: "Understanding APIs",
      author: "Hasib Rahman",
      category: "Backend",
      publishedDate: "2026-05-15",
      tags: ["API", "Backend", "Node.js"],
      isPublished: false,
      views: 430,
      content:
        "APIs allow applications to communicate with each other efficiently...",
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox",
      author: "Sarah Ali",
      category: "Design",
      publishedDate: "2026-05-10",
      tags: ["CSS", "Flexbox", "Grid"],
      isPublished: true,
      views: 2100,
      content:
        "Both CSS Grid and Flexbox are powerful layout systems in CSS...",
    },
  ];

  return (
    <div className="grid grid-cols-4 my-10 px-10 gap-5">
      {blogs.map((blog) => (
        <div key={blog.id} className="card card-border bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p>{blog.content}</p>
            <div className="card-actions justify-start">
              <Link href={`/blog/${blog.id}`} className="btn btn-primary">Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

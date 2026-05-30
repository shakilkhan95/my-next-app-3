

const PostsPage = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return (
      <div>
        <h1 className="text-7xl">Posts will appear here</h1>
        <div className="grid grid-cols-3 gap-5 px-5">
          {posts.map((post) => (
            <div key={post.id} className="card bg-primary text-primary-content ">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>
                  {post.body}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default PostsPage;
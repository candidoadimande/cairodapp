const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            {title}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p>writen by {blog.author}</p>
                </div>
            ))}
        </div>   
    );
}

export default BlogList;
import {Link} from "react-router-dom";

const BlogList = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
             {blogs.map((blog, idx) => (
                <div className="blog-preview" key={idx}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h1>{blog.title}</h1>
                        <p>Written By: {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const BlogsPage = async () => {
    const blogs = await fetch("http://localhost:5000/blogs", {

    }).then(data => data.json())
    return (
        <div>
            {
                blogs.map((blog: Blog) => <BlogCard key={blog.id} blog={blog}/>)
            }
        </div>
    );
};

export default BlogsPage;
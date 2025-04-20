import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const BlogsPage = async () => {
    const blogs = await fetch("http://localhost:5000/blogs", {
        cache: "no-store"
    }).then(data => data.json())
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5 max-w-6xl mx-auto my-10">
            {
                blogs.map((blog: Blog) => <BlogCard key={blog.id} blog={blog}/>)
            }
        </div>
    );
};

export default BlogsPage;
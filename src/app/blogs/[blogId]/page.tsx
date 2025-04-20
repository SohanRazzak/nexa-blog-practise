import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

type Props = {
    params: Promise<{blogId: string}>
}

const BlogPostPage = async ({params}: Props) => {
    const {blogId} = await params;
    const blog = await fetch(`http://localhost:5000/blogs/${blogId}`, {
        next: {
            revalidate: 30
        }
    }).then(data=> data.json());
    

    

    return (
        <div className='mx-auto max-w-6xl my-10'>
            <BlogDetailsCard blog={blog}/>
        </div>
    );
};

export default BlogPostPage;
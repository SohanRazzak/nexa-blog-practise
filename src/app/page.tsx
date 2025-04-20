import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

const HomePage = async () => {
    const blogs = await fetch("http://localhost:5000/blogs?_limit=5", {
      next: {
        revalidate: 30
      }
    }).then((data) =>
        data.json()
    );
    console.log(blogs);
    return (
        <div className="my-10">
            <LatestBlogs blogs={blogs}/>
        </div>
    );
};

export default HomePage;

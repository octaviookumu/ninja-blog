import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        // alert('changed')
        fetch("http://localhost:8080/blogs")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setIsPending(false);
                setBlogs(data);
            });
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && (
                <BlogList
                    blogs={blogs}
                    title="All Blogs!"
                    handleDelete={handleDelete}
                />
            )}
        </div>
    );
};

export default Home;

import React, {useContext} from "react";
import BlogSection from "../components/BlogSection";
import { BlogContext } from "../store/BlogContext"


const HomePage = () => {

    // getting the blogs
  const {blogs} =useContext(BlogContext)


  return (
    <>
      <div className="container-fluid jumbotron">
        <h1 className="centered"> Check out our awesome blogs </h1>
      </div>

      <section className="row  blog-section container">
        {blogs.map((item, index) => {
          return <BlogSection key={index} title={item.title} subject={item.subject} image={item.imgURL} />;
        })}
      </section>
    </>
  );
};
export default HomePage;

// src/pages/blogs/index.tsx

import Navbar from "../../components/Navbar";
import HeaderTitle from "../../components/HeaderTitle";
import ListBlogs from "../../components/ListBlogs";
import BlogNews from "../../components/BlogNews";

function index() {
  return (
    <div>
      <Navbar />
      <HeaderTitle title="BLOGS" locationPage="PAGE => BLOGS" />
      {/* <LatestPosts />

      <SocialLinks /> */}
      <div
        style={{
          margin: "100px auto",
          padding: "0px 100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            margin: "100px auto",
            padding: "0px 100px",
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <div style={{ flex: 1 }}>
            <ListBlogs />
          </div>
          <div style={{ flex: 3 }}>
            <BlogNews />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

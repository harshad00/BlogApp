import React, { useState, useEffect } from "react";
import { Container, PostCart } from "../components/index.js";
import appwritService from "../appwrit/confing"

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);

  appwritService.getPosts([]).then((post) => {
    if (post) {
      setPosts(posts.document);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div key={post.$Id} className="p-2 w-1/4">
              <PostCart post={post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;

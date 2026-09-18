import React from "react";
//Data Fetch 2, Step 1
// const postsPromise = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

//Data Fetch 3, Step 1
const getPost= async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return res.json()

}

const PostPage = async () => {
    //Data Fetch 1
  //   const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await data.json();

  //Data Fetch 2, Step 2
//   const posts = await postsPromise();
//Data Fetch 3, Step 2

const posts = await getPost()

  return (
    <div>
      <h2 className="text-3xl font-bold">Post Page : {posts.length}</h2>
    </div>
  );
};

export default PostPage;

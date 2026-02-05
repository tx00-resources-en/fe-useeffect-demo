const apiUrl = "http://localhost:3001/api/blogs";


const blogId = "698459fc1c891e8b6381d6eb";

const updatedData = {
  title: "Here is an updated title",
  body: "here is updated body",
  author: "Sami",
};

const updateBlog = async (blogId, updatedData) => {







  const response = await fetch(`${apiUrl}/${blogId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });



  


  if (!response.ok) {
    throw new Error("Failed to update the blog");
  }

  const updatedBlog = await response.json();
  console.log("Blog updated:", updatedBlog);
};

// const updateBlog = async (blogId, updatedData) => {
//   try {
//     const response = await fetch(`${apiUrl}/${blogId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedData),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to update the blog");
//     }

//     const updatedBlog = await response.json();
//     console.log("Blog updated:", updatedBlog);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

updateBlog(blogId, updatedData);

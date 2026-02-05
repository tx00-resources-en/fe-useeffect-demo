const apiUrl = "http://localhost:3001/api/blogs";
let id = "698459fc1c891e8b6381d6eb";

const fetchBlog = async () => {


  const response = await fetch(`${apiUrl}/${id}`);
  console.log(`${apiUrl}/${id}`);
  

  
  // console.log(`${apiUrl}/${id}`);
  const data = await response.json();

  console.log(data);
};

fetchBlog();

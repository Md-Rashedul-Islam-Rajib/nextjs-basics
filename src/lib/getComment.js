const getComments = async () => {
    const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await comments.json();
    return data;
  };
  
  export default getComments;
  
  export async function getPosts() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await posts.json();
    return data;
  }
  

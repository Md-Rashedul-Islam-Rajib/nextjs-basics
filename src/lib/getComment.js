const getComments = async () => {
    const comments = await fetch("https://jsonplaceholder.typicode.com/comments",{
        next: { revalidate : 7200}
    });
    const data = await comments.json();
    return data;
  };
  
  export default getComments;
  
  export async function getPosts() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts", { next : { revalidate : 3600}});
    const data = await posts.json();
    return data;
  }
  

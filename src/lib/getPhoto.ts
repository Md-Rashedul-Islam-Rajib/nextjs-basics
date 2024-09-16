const getPhoto = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10", {
        next: { revalidate: 3666 },
      });
      const data = await res.json(); // Add 'await' here
      return data;
    } catch (error: any) {
      throw new Error(error.message || "An error occurred while fetching photos");
    }
  };
  
  export default getPhoto;
  
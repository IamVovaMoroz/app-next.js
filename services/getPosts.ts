export const getAllPosts = async () => {
    try {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  
      if (!response.ok) {
        throw new Error("Unable to fetch");
      }
  
      const data = await response.json(); // Извлекаем данные из ответа
      return data; // Возвращаем данные
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  };
  
  export const getPostsBySearch = async (search: string) => {
    try {
      const response = await fetch(`http://jsonplaceholder.typicode.com/posts?q=${search}`);
  
      if (!response.ok) {
        throw new Error("Unable to fetch by search");
      }
  
      const data = await response.json(); // Извлекаем данные из ответа
      return data; // Возвращаем данные
    } catch (error) {
      console.error("Error fetching posts by search:", error);
      throw error;
    }
  };
  
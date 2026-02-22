import { useEffect, useState } from "react";
import Card from "../components/Card";
import axiosInstance from "../services/axiosInstance";

const FavoritesPage = () => {
  const [favoritePosts, setFavoritePosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = localStorage.getItem("favorites");

        const favorites = data ? JSON.parse(data) : [];
        const response = await axiosInstance.post("/posts", {
          ids: favorites,
        });

        setFavoritePosts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex size-full flex-col items-center justify-center gap-12">
        {/* Larger spinner */}
        <div className="size-20 animate-spin rounded-full border-8 border-yellow-80 border-t-transparent" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2">
      {favoritePosts ? (
        favoritePosts.map((post) => {
          return <Card key={post.id} title={post.title} />;
        })
      ) : (
        <div>No Posts Favorited</div>
      )}
    </div>
  );
};

export default FavoritesPage;

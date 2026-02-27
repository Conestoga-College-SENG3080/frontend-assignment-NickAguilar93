/*
 * FILE : FavoritesPage.jsx
 * PROJECT : SENG3080 - Frontend Assignment
 * PROGRAMMER : Nicholas Aguilar
 * FIRST VERSION : 2026-02-22
 * DESCRIPTION : This file defines the FavoritesPage component where users can view favorites and remove items
 */
import { useEffect, useState } from "react";
import Card from "../components/Card";
import axiosInstance from "../services/axiosInstance";

const FavoritesPage = () => {
  const [favoritePosts, setFavoritePosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /*
   *	FUNCTION : handleFavoriteRemove
   *	DESCRIPTION	: Function to handle an onClick event
                    removing posts from favorites in web storage and react memory
   *	PARAMETERS :
   *      id - The id of the forum post.
   *	RETURNS : Nothing
   */
  const handleFavoriteRemove = (id) => {
    const data = localStorage.getItem("favorites");

    const favorites = data ? JSON.parse(data) : [];

    const updatedFavorites = favorites.filter((fId) => fId != id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoritePosts((prev) => prev.filter((post) => post.id !== id));
  };
  useEffect(() => {
    /*
     *	FUNCTION : fetchFavorites
     *	DESCRIPTION	: Function to request posts from the API based on saved Ids
     *	PARAMETERS : Nothing
     *	RETURNS : Nothing
     */
    const fetchFavorites = async () => {
      try {
        const data = localStorage.getItem("favorites");

        const favorites = data ? JSON.parse(data) : [];
        if (favorites.length > 0) {
          const response = await axiosInstance.post("/posts", {
            ids: favorites,
          });

          setFavoritePosts(response.data);
        }
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
    <div className="max-w-3/4 mx-auto pt-2 space-y-4">
      {favoritePosts.length > 0 ? (
        favoritePosts.map((post) => {
          return (
            <div key={post.id}>
              <Card
                title={post.title}
                description={post.content}
                author={post.author}
                totalLikes={post.totalLikes}
                totalRead={post.totalRead}
                button={true}
                buttonOnClick={() => handleFavoriteRemove(post.id)}
              />
            </div>
          );
        })
      ) : (
        <div className="flex justify-center items-center">
          <h2 className="text-2xl">No Posts Favorited</h2>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;

/*
 * FILE : ForumPage.jsx
 * PROJECT : SENG3080 - Frontend Assignment
 * PROGRAMMER : Nicholas Aguilar
 * FIRST VERSION : 2026-02-22
 * DESCRIPTION : This file defines the ForumPage component where users can view forum posts and favorite items
 */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../services/axiosInstance";
import Card from "../components/Card";

const ForumPage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    /*
     *	FUNCTION : fetchPosts
     *	DESCRIPTION	: Function to request posts from the API
     *	PARAMETERS : Nothing
     *	RETURNS : Nothing
     */
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get(`/forums/${id}`, {
          params: {
            sortBy: "hot",
            limit: "10",
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  /*
   *	FUNCTION : handleClick
   *	DESCRIPTION	: Function to handle an onClick event
                    handling storage of favorites in web storage
   *	PARAMETERS :
   *      id - The id of the forum post.
   *	RETURNS : Nothing
   */
  const handleClick = (id) => {
    let data = localStorage.getItem("favorites");

    const favorites = data ? JSON.parse(data) : [];

    if (favorites.includes(id)) {
      alert("This item already exists in favorites");
      return;
    }
    const updatedFavorites = [...favorites, id];

    const serializedData = JSON.stringify(updatedFavorites);

    localStorage.setItem("favorites", serializedData);
    alert("Favorite saved");
  };

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
      {posts ? (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <Card
                title={post.title}
                description={post.content}
                author={post.author}
                totalLikes={post.totalLikes}
                totalRead={post.totalRead}
                onClick={() => handleClick(post.id)}
              />
            </div>
          );
        })
      ) : (
        <div>No list</div>
      )}
    </div>
  );
};

export default ForumPage;

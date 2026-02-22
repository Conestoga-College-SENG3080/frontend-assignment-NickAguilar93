import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "../services/axiosInstance";
import Card from "../components/Card";

const ForumPage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();
  useEffect(() => {
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

  const handleClick = () => {
    navigate(`forum/${id}`);
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
    <div>
      {posts ? (
        posts.map((post) => {
          return (
            <Card
              title={post.title}
              description={post.content}
              onClick={handleClick}
            />
          );
        })
      ) : (
        <div>No list</div>
      )}
    </div>
  );
};

export default ForumPage;

import { useEffect, useState } from "react";
import Card from "../components/Card";
import axiosInstance from "../services/axiosInstance";
const Homepage = () => {
  const [forums, setForums] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchForums = async () => {
      try {
        const response = await axiosInstance.get("/forums");
        setForums(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchForums();
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
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
      {forums ? (
        forums.map((forum, i) => {
          return (
            <Card key={i} title={forum.slug} description={forum.description} />
          );
        })
      ) : (
        <div>No list</div>
      )}
    </div>
  );
};

export default Homepage;

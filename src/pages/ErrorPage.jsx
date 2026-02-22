import { HttpStatusCode } from "axios";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let title = "Ooops! Something went wrong.";
  let message = "Oops, something went wrong on our end";

  if (isRouteErrorResponse) {
    if (error.status === HttpStatusCode.NotFound) {
      title = "Page cannot be found";
      message = "The page you are looking for does not exist";
    } else if (error.status === HttpStatusCode.Unauthorized) {
      title = "UNAUTHORIZED";
      message = "You are not allowed to access this page";
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex h-[calc(100vh-56px)] flex-col items-center justify-center">
        <div className="mt-1 text-center">
          <h1 className="mb-2 text-2xl font-bold text-red-500">{title}</h1>
          <p className="mb-5 text-lg text-red-500">{message}</p>
          <button
            className="cursor-pointer btn-social"
            onClick={() => navigate("/")}
            type="submit"
          >
            Back to Homepage
          </button>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;

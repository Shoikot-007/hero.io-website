import { Link } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <img
              src="/error-404.png"
              alt="404 Error"
              className="w-full max-w-md mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Oops, page not found!
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              The page you are looking for is not available.
            </p>
            <Link
              to="/"
              className="btn btn-primary bg-purple-600 hover:bg-purple-700 border-none text-white normal-case px-8"
            >
              Go Back!
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
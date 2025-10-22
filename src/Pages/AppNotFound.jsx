import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <img
            src="/App-Error.png"
            alt="App Not Found"
            className="w-full max-w-md mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link
            to="/"
            className="btn btn-primary bg-purple-600 hover:bg-purple-700 border-none text-white normal-case px-8"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;
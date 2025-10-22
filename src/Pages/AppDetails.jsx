import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { appsData } from "../data/appsData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Loading from "../Components/Loading";
import { toast } from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundApp = appsData.find((app) => app.id === parseInt(id));

      if (!foundApp) {
        navigate("/app-not-found");
        return;
      }

      setApp(foundApp);

      const installedApps =
        JSON.parse(localStorage.getItem("installedApps")) || [];
      const installed = installedApps.some(
        (installedApp) => installedApp.id === foundApp.id
      );
      setIsInstalled(installed);

      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id, navigate]);

  const handleInstall = () => {
    if (!app) return;

    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    installedApps.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));

    setIsInstalled(true);
    toast.success("App installed successfully!");
  };

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(0)}M`;
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(0)}K`;
    }
    return downloads.toString();
  };

  const formatReviews = (reviews) => {
    if (reviews >= 1000) {
      return `${(reviews / 1000).toFixed(0)}K`;
    }
    return reviews.toString();
  };

  if (loading) {
    return <Loading />;
  }

  if (!app) {
    return null;
  }

  const chartData = app.ratings.map((rating) => ({
    name: rating.name,
    count: rating.count,
  }));

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8 flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="shrink-0">
            <div className="w-40 h-40 md:w-80 md:h-80 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col md:items-start items-center text-center md:text-left gap-4">
            <h1 className="text-2xl md:text-4xl font-bold">{app.title}</h1>
            <p className="text-purple-600 mb-4  text-lg">Developed by {app.companyName}</p>

            <div className="flex justify-center md:justify-start gap-10">
              <div className="flex flex-col items-center">
                <img
                  src="/icon-downloads.png"
                  alt="Downloads"
                  className="h-12 w-12 mb-1"
                />
                <p className="text-gray-600">Downloads</p>
                <p className="text-xl md:text-3xl font-bold">
                  {formatDownloads(app.downloads)}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/icon-ratings.png"
                  alt="Rating"
                  className="h-12 w-12 mb-1"
                />
                <p className="text-gray-600">Average Ratings</p>
                <p className="text-xl md:text-3xl font-bold">{app.ratingAvg}</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/icon-review.png"
                  alt="Reviews"
                  className="h-12 w-12 mb-1"
                />
                <p className="text-gray-600">Total Reviews</p>
                <p className="text-xl md:text-3xl font-bold">
                  {formatReviews(app.reviews)}
                </p>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`btn btn-lg mt-4 md:mt-6 ${
                isInstalled
                  ? "btn-disabled bg-gray-400"
                  : "btn-primary bg-green-500 hover:bg-green-600 border-none"
              } text-white normal-case px-12`}
            >
              {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8">
          <h2 className="text-2xl font-bold mb-6">Ratings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {app.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;

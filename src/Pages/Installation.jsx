import { useState, useEffect } from "react";
import { Link } from "react-router";
import Loading from "../Components/Loading";
import { toast } from "react-hot-toast";

const Installation = () => {
  const [loading, setLoading] = useState(true);
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    loadInstalledApps();
  }, []);

  useEffect(() => {
    if (sortOrder) {
      sortApps(sortOrder);
    }
  }, [sortOrder]);

  const loadInstalledApps = () => {
    setLoading(true);
    setTimeout(() => {
      const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
      setInstalledApps(apps);
      setLoading(false);
    }, 500);
  };

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    toast.success("App uninstalled successfully!");
  };

  const sortApps = (order) => {
    const sorted = [...installedApps].sort((a, b) => {
      if (order === "high-low") {
        return b.downloads - a.downloads;
      } else if (order === "low-high") {
        return a.downloads - b.downloads;
      }
      return 0;
    });
    setInstalledApps(sorted);
  };

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(0)}M`;
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(0)}K`;
    }
    return downloads.toString();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Your Installed Apps
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">
                {installedApps.length} Apps Found
              </h2>
            </div>

            <div className="form-control w-full md:w-auto">
              <select
                className="select select-bordered w-full md:w-64"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="" disabled>
                  Sort By Size
                </option>
                <option value="high-low">High-Low</option>
                <option value="low-high">Low-High</option>
              </select>
            </div>
          </div>

          {installedApps.length > 0 ? (
            <div className="space-y-4">
              {installedApps.map((app) => (
                <div
                  key={app.id}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center gap-4"
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-lg font-bold mb-2">{app.title}</h3>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                      <div className="flex items-center gap-1 text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <span className="font-semibold">
                          {formatDownloads(app.downloads)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-orange-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold">{app.ratingAvg}</span>
                      </div>
                      <div className="text-gray-600">
                        <span className="font-semibold">{app.size} MB</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="btn btn-error text-white normal-case px-6"
                  >
                    Uninstall
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No Apps Installed
              </h3>
              <p className="text-gray-500 mb-6">
                Start exploring and install your favorite apps
              </p>
              <Link
                to="/apps"
                className="btn btn-primary bg-purple-600 hover:bg-purple-700 border-none text-white normal-case px-8"
              >
                Browse Apps
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Installation;

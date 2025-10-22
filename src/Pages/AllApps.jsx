import { useState, useEffect } from "react";
import { appsData } from "../data/appsData";
import AppCard from "../Components/AppCard";
import Loading from "../Components/Loading";

const AllApps = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredApps, setFilteredApps] = useState(appsData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const searchTimer = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setFilteredApps(appsData);
      } else {
        const filtered = appsData.filter((app) =>
          app.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredApps(filtered);
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(searchTimer);
  }, [searchQuery]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Our All Applications
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">
                ({filteredApps.length}) Apps Found
              </h2>
            </div>

            <div className="w-full md:w-auto">
              <div className="form-control">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search Apps"
                    className="input input-bordered w-full md:w-80"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn btn-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {loading ? (
            <Loading />
          ) : filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No App Found
              </h3>
              <p className="text-gray-500">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllApps;
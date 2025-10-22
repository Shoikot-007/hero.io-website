import { useState, useEffect } from "react";
import { Link } from "react-router";
import { appsData } from "../data/appsData";
import AppCard from "../Components/AppCard";
import Loading from "../Components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const topApps = appsData.slice(0, 8);

  return (
    <div>
      <section className="pt-16 md:pt-24 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We Build <span className="text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">Productive</span> Apps
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg bg-white border-2 border-gray-300 hover:border-purple-600 normal-case gap-2"
              >
                <img
                  src="/play-store-icon.png"
                  alt="Google Play"
                  className="h-6 w-6"
                />
                Google Play
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg bg-white border-2 border-gray-300 hover:border-purple-600 normal-case gap-2 px-6"
              >
                <img
                  src="/app-store-icon.png"
                  alt="App Store"
                  className="h-6 w-6"
                />
                App Store
              </a>
            </div>

            <div className="flex justify-center items-center relative">
              <img
                src="/hero.png"
                alt="Hero App"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center text-white">
              <p className="text-sm mb-2 opacity-90">Total Downloads</p>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">29.6M</h3>
              <p className="text-sm opacity-75">21% More Than Last Month</p>
            </div>

            <div className="text-center text-white">
              <p className="text-sm mb-2 opacity-90">Total Reviews</p>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">906K</h3>
              <p className="text-sm opacity-75">46% More Than Last Month</p>
            </div>

            <div className="text-center text-white">
              <p className="text-sm mb-2 opacity-90">Active Apps</p>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">132+</h3>
              <p className="text-sm opacity-75">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trending Apps
            </h2>
            <p className="text-gray-600 text-lg">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/apps"
              className="btn btn-primary bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#5326cc] hover:to-[#8e4ee0] border-none text-white normal-case px-8"
            >
              Show All
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
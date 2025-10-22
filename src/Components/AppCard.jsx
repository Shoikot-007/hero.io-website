import { Link } from "react-router";

const AppCard = ({ app }) => {
  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(0)}M`;
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(0)}K`;
    }
    return downloads.toString();
  };

  return (
    <Link to={`/app/${app.id}`}>
      <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
        <figure className="px-4 pt-4">
          <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-full object-cover"
            />
          </div>
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-base md:text-lg line-clamp-2 min-h-[3rem]">
            {app.title}
          </h2>
          <div className="flex items-center justify-between mt-2">
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
              <span className="text-sm font-semibold">
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
              <span className="text-sm font-semibold">{app.ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
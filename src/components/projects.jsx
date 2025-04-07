
import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [showAllRepos, setShowAllRepos] = useState(false);

  useEffect(() => {
    // Fetch repositories from GitHub API
    fetch("https://api.github.com/users/adityaraazsingh/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
        setLoading(false);
      });
  }, []);

  // Filter repositories based on search query
  const filteredRepositories = repositories.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.language && repo.language.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Limit repositories if "Show All" is not toggled
  const displayedRepositories = showAllRepos ? filteredRepositories : filteredRepositories.slice(0, 3);

  return (
    <section className="py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-12">
        Projects
      </h2>

      {/* Search Input */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex from-black to-transparent text-gray-400 rounded-lg shadow-lg p-3 w-full max-w-lg">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or technologies..."
            className="bg-transparent text-gray-100 w-full focus:outline-none"
          />
          <span className="text-yellow-400 flex items-center pl-3">
            <FaMagnifyingGlass />
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <p className="text-center text-gray-400">Loading projects...</p>
      ) : displayedRepositories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedRepositories.map((repo) => (
            <div
              key={repo.id}
              className="p-6 bg-gradient-to-r  from-gray-800 to-transparent text-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 group"
            >
              {/* Project Name */}
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                {repo.name}
              </h3>

              {/* Project Description */}
              <p className="text-gray-400 mb-4">
                {repo.description || "No description available"}
              </p>

              {/* Technologies */}
              <p className="text-sm text-gray-400 mb-4">
                <span className="font-semibold text-yellow-400">Language:</span>{" "}
                {repo.language || "N/A"}
              </p>

              {/* GitHub Link */}
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-8">
          No projects found matching your search.
        </p>
      )}

      {/* "Show All" Button */}
      {filteredRepositories.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAllRepos((prev) => !prev)}
            className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors"
          >
            {showAllRepos ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;

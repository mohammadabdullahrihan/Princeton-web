import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

const AdminGetExplore = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMute, setIsMute] = useState(true); // Default mute state

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://chuti-harmony-server.vercel.app/api/v1/explore-project/explore-project"
      );
      console.log(response.data);
      setProjects(response.data.data); // Adjust if API response structure differs
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProject = async (projectId) => {
    try {
      await axios.delete(
        `https://chuti-harmony-server.vercel.app/api/v1/explore-project/explore-project/${projectId}`
      );
      toast.success("Project deleted successfully!");
      setProjects((prev) =>
        prev.filter((project) => project._id !== projectId)
      );
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const extractYouTubeID = (url) => {
    const match = url?.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/\?v=))([^&?\/\s]{11})/
    );
    return match ? match[1] : null;
  };

  const videoOptions = (videoId) => ({
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: isMute ? 1 : 0,
      controls: 0,
      loop: 1,
      playlist: videoId,
    },
  });

  return (
    <section>
      <div>
        <Link to={"/admin/create-explore"}>
          <button className="btn btn-primary bg-[#8E8A20] border-none text-white hover:bg-[#9c992b] mb-10">
            Create Explore Project
          </button>
        </Link>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Manage Projects</h2>
        {isLoading ? (
          <p>Loading projects...</p>
        ) : (
          <div className="lg:grid grid-cols-3 gap-4">
            {projects.map((project) => {
              const videoId = extractYouTubeID(project.url);
              return (
                <div key={project._id} className="border p-2 mx-5 rounded">
                  <div>
                    <p className="mb-5 text-xl">
                      Name of project:{" "}
                      <span className="font-bold">{project.name}</span>
                    </p>
                    {videoId ? (
                      <YouTube
                        videoId={videoId}
                        opts={videoOptions(videoId)}
                        className="w-68 h-64 object-cover"
                      />
                    ) : (
                      <p className="text-red-500">Invalid video URL</p>
                    )}
                  </div>
                  <br />
                  <button
                    onClick={() => deleteProject(project._id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminGetExplore;

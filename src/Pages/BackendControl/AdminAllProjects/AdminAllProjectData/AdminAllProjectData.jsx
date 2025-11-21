import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AdminAllProjectData = ({ projectFullDetail, index }) => {
  const {
    _id,
    projectName,
    projectCoverPhoto,
    status,
    address,
    architectName,
    landArea,
    facing,
    frontRoad,
    sizeOfUnits,
    numberOfCarParking,
    landScapingConsultant,
    loadOrientation,
    specialtyOfTheLand,
    numberOfApartments,
    numberOfBaseMents,
    rajukApprovalNo,
  } = projectFullDetail;

  const handleDeleteSingleProject = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        // Make the API call to delete the project
        const response = await axios.delete(
          `https://chuti-harmony-server.vercel.app/api/v1/project-details/project-details/${id}`
        );

        if (response.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "The project has been deleted successfully.",
            icon: "success",
          });
          toast.success("Project Deleted Successfully");
        } else {
          toast.error("Something went wrong");
        }
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project. Please try again.");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-xl mb-2 font-bold">Project : {index + 1}</h1>
      </div>
      <div className="border broder-black rounded p-2">
        <p>Project Name: {projectName}</p>
        <p>Status: {status}</p>
        <p>Address: {address}</p>
        <p>Facebook: {architectName}</p>
        <p>Head Office: {landArea}</p>
        <p>Corporate Office: {facing}</p>
        <p>Website: {frontRoad}</p>
        <p>Size of units: {sizeOfUnits}</p>
        <p>Number of car parking: {numberOfCarParking}</p>
        <p>Land scaping consultant: {landScapingConsultant}</p>
        <p>Load orientation: {loadOrientation}</p>
        <p>Specialty of the land: {specialtyOfTheLand}</p>
        <p>Number of apartments: {numberOfApartments}</p>
        <p>Number of basements: {numberOfBaseMents}</p>
        <p>Rajuk approval no: {rajukApprovalNo}</p>
        <img  loading="lazy" className="w-60 h-60 mt-5" src={projectCoverPhoto} alt="" />
        <div className="flex gap-20 p-2">
          <button className="btn btn-warning">Edit</button>
          <button
            onClick={() => handleDeleteSingleProject(_id)}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAllProjectData;

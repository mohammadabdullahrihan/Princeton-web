const AdminOurTeamData = ({ ourTeamData, onDelete }) => {
  const { _id, name, designation, bio, photo } = ourTeamData;

  const handleDeleteTeamTwoMember = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this team member?"
    );
    if (confirmDelete) {
      onDelete(_id); // Notify parent to update the team list
    }
  };

  return (
    <div className="border border-gray-300 rounded my-5 p-5">
      <h1 className="text-2xl">Name: {name}</h1>
      <h3 className="text-xl mt-5">Designation: {designation}</h3>
      <p className="text-xl mt-5">Bio: {bio}</p>
      <img  loading="lazy" className="mt-5 w-60 h-60" src={photo} alt="" />
      <button
        onClick={handleDeleteTeamTwoMember}
        className="btn btn-error border-none mt-5 text-white "
      >
        Delete
      </button>
    </div>
  );
};

export default AdminOurTeamData;

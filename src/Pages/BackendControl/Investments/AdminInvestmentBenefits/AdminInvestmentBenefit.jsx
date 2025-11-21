import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Loading from "../../../../Shared/Loading/Loading";

const AdminInvestmentBenefit = ({ investmentBenefit }) => {
  const { _id, benefits } = investmentBenefit;
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    <Loading></Loading>;
  }
  const handleInvestmentBenefit = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `https://chuti-harmony-server.vercel.app/api/v1/investment/investment/${_id}`
          );
          if (response.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the benefit. Please try again.",
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <div className="border border-gray-500 mb-5 rounded p-2">
      <li className=" mb-5">{benefits}</li>
      <button
        onClick={handleInvestmentBenefit}
        className="btn btn-primary text-white bg-red-600 hover:bg-red-800 border-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        Delete
      </button>
    </div>
  );
};

export default AdminInvestmentBenefit;

import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const AdminAddInvestmentBenefit = () => {
  const [isLoading, setIsLoading] = useState(true);
  // handle add benefit
  const handleBenefits = () => {
    Swal.fire({
      title: "Add your new benefit",
      input: "text",
      inputPlaceholder: "Enter the benefit description",
      showCancelButton: true,
      confirmButtonText: "Add benefit",
      showLoaderOnConfirm: true,
      preConfirm: async (inputText) => {
        if (!inputText) {
          Swal.showValidationMessage("Benefit description cannot be empty");
          return false;
        }
        try {
          const response = await axios.post(
            "https://chuti-harmony-server.vercel.app/api/v1/investment/investment",
            { benefits: inputText }
          );

          return response.data;
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `success`,
          text: "Benefit added successfully",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <button
        onClick={handleBenefits}
        className="btn btn-primary bg-[#8a8328] border-none  hover:bg-[#a59c24] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        Add Benefit
      </button>
    </div>
  );
};

export default AdminAddInvestmentBenefit;

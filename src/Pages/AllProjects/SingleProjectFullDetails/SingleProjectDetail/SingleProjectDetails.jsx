import useProjectFullDetailsSingleData from "../../../../Hooks/useProjectFullDetailsSingleData";

const SingleProjectDetails = () => {
  const [projectFullDetails] = useProjectFullDetailsSingleData();
  return (
    <section className="lg:grid grid-cols-2 mt-20  justify-items-center place-items-center bg-[#FFFAF4]">
      <div>
        <h1 className="text-6xl uppercase font-sans">
          At a <br /> glance
        </h1>
        <p className="uppercase text-xl mt-20 text-[#b3a923]">
          Status: {projectFullDetails.status}
        </p>
        <p className="uppercase text-xl mt-20 font-bold font-sans">Address</p>
        <p className="uppercase text-xl font-bold font-sans">
          {projectFullDetails.address}
        </p>
      </div>
      <div className="">
        <div className="flex flex-cols-2 lg:gap-40  border-b border-gray-400">
          <div className="mt-8 mb-8 w-48">
            <h3 className=" font-bold uppercase">Facebook:</h3>
            <p className="">{projectFullDetails.architectName}</p>
          </div>
          <div className="mt-8 mb-8 w-48">
            <h3 className=" font-bold uppercase">Landscaping consultant:</h3>
            <p className="">{projectFullDetails.landScapingConsultant}</p>
          </div>
        </div>
        <div className="flex flex-cols-2 lg:gap-40  border-b border-gray-400">
          <div className="mt-8 mb-8 w-48">
            <h3 className=" font-bold uppercase">Head Office:</h3>
            <p className="">{projectFullDetails.landArea}</p>
          </div>
          <div className="mt-8 mb-8 w-48">
            <h3 className=" font-bold uppercase">Land orientaion:</h3>
            <p className="">{projectFullDetails.loadOrientation}</p>
          </div>
        </div>
        <div className="flex flex-cols-2 lg:gap-40  border-b border-gray-400">
          <div className="mt-8 mb-8 w-48">
            <h3 className=" font-bold uppercase">Corporate Office:</h3>
            <p className="">{projectFullDetails.facing}</p>
          </div>
          <div className="mt-8 mb-8 w-48">
            <h3 className=" font-bold uppercase">Speciality of the land:</h3>
            <p className="">{projectFullDetails.specialtyOfTheLand}</p>
          </div>
        </div>
        <div className="flex flex-cols-2 lg:gap-40  border-b border-gray-400">
          <div className="mt-8 mb-8 w-48">
            <h3 className=" font-bold uppercase">Website:</h3>
            <p className="">{projectFullDetails.frontRoad}</p>
          </div>
          <div className="mt-8 mb-8 w-48">
            <h3 className=" font-bold uppercase">Number of apartments:</h3>
            <p className="">{projectFullDetails.numberOfApartments}</p>
          </div>
        </div>
        <div className="flex flex-cols-2 lg:gap-40  border-b border-gray-400">
          <div className="mt-8 mb-8 w-48">
            <h3 className=" font-bold uppercase">size of units:</h3>
            <p className="">{projectFullDetails.sizeOfUnits}</p>
          </div>
          <div className="mt-8 mb-8 w-48">
            <h3 className=" font-bold uppercase">Number of basements:</h3>
            <p className="">{projectFullDetails.numberOfBaseMents}</p>
          </div>
        </div>
        <div className="flex flex-cols-2 lg:gap-40  border-b border-gray-400">
          <div className="mt-8 mb-8 w-48 ">
            <h3 className=" font-bold uppercase">Number of car parking:</h3>
            <p className="">{projectFullDetails.numberOfCarParking}</p>
          </div>
          <div className="mt-8 mb-8 w-48">
            <h3 className=" font-bold uppercase">Rajuk Approval no:</h3>
            <p className="">{projectFullDetails.rajukApprovalNo}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProjectDetails;

// architectName": "Architects Inc.",
//         "landArea": "10 acres",
//         "facing": "North",
//         "frontRoad": "60 feet",
//         "sizeOfUnits": "1200 sq ft - 2500 sq ft",
//         "numberOfCarParking": "200",
//         "landScapingConsultant": "Landscapers Ltd.",
//         "loadOrientation": "East-West",
//         "specialtyOfTheLand": "Sloping Land with River View",
//         "numberOfApartments": 150,
//         "numberOfBaseMents": 2,
//         "rajukApprovalNo": "RAJUK/2023/123",

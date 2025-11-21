import { useState } from "react";

const AdminOurClients = () => {

  // clients
  const [ourClients, setOurClients] = useState([]);

  // load clients from database
  return (
    <section>
      <div>
        <h1 className="text-2xl font-sans">Admin Our Clients</h1>
      </div>
      <div className="border border-gray-500 p-5 mt-10">
        <div className="border border-gray-400 p-5">
          <form>
            <input className="border border-gray-400 w-96 p-3" type="text" placeholder="Client's Name"/>
            <br />
            <br />
            <input type="file" />
            <br />
            <input className="mt-5 btn btn-primary text-white bg-none hover:bg-[#8E8A20] border-none" type="submit" value="Add New Client" />
          </form>
        </div>
      </div>
      <div>
        
      </div>
    </section>
  );
};

export default AdminOurClients;

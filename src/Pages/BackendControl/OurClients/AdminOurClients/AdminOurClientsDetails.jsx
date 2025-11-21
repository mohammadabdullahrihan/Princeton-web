
const AdminOurClientsDetails = ({ourClient}) => {

    const {clientName, image} = ourClient;
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default AdminOurClientsDetails;
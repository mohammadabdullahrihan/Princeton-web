import axios from "axios";
import toast from "react-hot-toast";

const Message = ({ adminMessage, messageCount }) => {
  const { _id, firstName, lastName, email, phoneNumber, category, message } =
    adminMessage;

  const handleDeleteMessage = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (isConfirmed) {
      try {
        const response = await axios.delete(
          `https://chuti-harmony-server.vercel.app/api/v1/message/message/${_id}`
        );
        if (response.status === 200) {
          toast.success("Remove message from Database");
        }
      } catch (error) {
        console.log(error);
        toast.error("Data remove failed");
      }
    } else {
      toast.error("Message deletion canceled");
    }
  };
  return (
    <div className="border border-gray-950 rounded p-7 mt-5 ">
      <p className="text-xl">
        <span className="font-bold">Message Date:</span>{" "}
        {adminMessage.createdAt.slice(0, 10)}
      </p>
      <p className="text-xl">
        <span className="font-bold">Name:</span> {firstName} {lastName}
      </p>

      <p className="text-xl">
        <span className="font-bold">Email:</span> {email}
      </p>
      <p className="text-xl">
        {" "}
        <span className="font-bold">Phone Number:</span> {phoneNumber}
      </p>
      <p className="text-xl">
        <span className="font-bold">Category:</span> {category}
      </p>
      <p className="border-t border-gray-800 mt-5"></p>
      <p className="text-xl mt-5">
        <span className="font-bold">Message:</span> {message}
      </p>
      <button
        onClick={handleDeleteMessage}
        className="mt-5 btn btn-error text-white"
      >
        Delete Message
      </button>
    </div>
  );
};

export default Message;

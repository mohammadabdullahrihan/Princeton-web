import axios from "axios";
import { useEffect, useState } from "react";
import Message from "./Message";
import MessageCategories from "../MessageCategories";
import Loading from "../../../../Shared/Loading/Loading";

const AdminMessages = () => {
  const [adminMessages, setAdminMessages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch data from backend
  const fetchedMessage = async () => {
    try {
      const response = await axios.get(
        "https://chuti-harmony-server.vercel.app/api/v1/message/message"
      );
      if (response.data.data) {
        setAdminMessages(response.data.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchedMessage();
  }, [adminMessages]);
  return (
    <section>
      <div className="">
        <MessageCategories></MessageCategories>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-bold underline">Messages:</h1>
      </div>
      <div>
        {adminMessages.map((adminMessage) => (
          <Message key={adminMessage._id} adminMessage={adminMessage}></Message>
        ))}
        {isLoading ? (
          <div>
            <Loading></Loading>
          </div>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div>
            {adminMessages.map((message, index) => {
              <Message
                key={message._id}
                messageCount={index + 1}
                message={message}
              />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminMessages;

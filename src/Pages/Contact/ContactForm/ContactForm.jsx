import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DarkModeContext } from "../../../Contexts/NightLightContext";

const ContactForm = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [categories, setCategories] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  // const formRef = useRef(null);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/message-category/message-category"
        );
        const data = response.data.data;
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  // check all fields are fill or not
  // const isFormValid =  firstName && lastName && email && phoneNumber && category && message;

  // handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // collect form data
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      category,
      message,
    };

    try {
      // post the data to backend
      const response = await axios.post(
        "https://chuti-harmony-server.vercel.app/api/v1/message/message",
        formData
      );
      console.log("Form submitted successfully", response.data);
      if (response.data) {
        toast("Successfully Submit your message");
        // Reset the form fields after successful submission
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setCategory("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={"w-full text-black mt-10 lg:px-0 px-5"}>
      <form onSubmit={handleSubmit}>
        <div>
          <p
            className={`${darkMode ? "text-white" : "text-black"} text-xl mb-2`}
          >
            Full Name
          </p>
          <input
            type="text"
            className="w-full lg:w-[35rem] h-10 rounded px-2"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div>
          <p
            className={`${
              darkMode ? "text-white" : "text-black"
            } text-xl mb-2 mt-2`}
          >
            Phone Number
          </p>
          <input
            type="text"
            className="w-full lg:w-[35rem] h-10 rounded px-2"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div>
          <p
            className={`${
              darkMode ? "text-white" : "text-black"
            } text-xl mb-2 mt-2`}
          >
            Email
          </p>
          <input
            type="text"
            className="w-full lg:w-[35rem] h-10 rounded px-2"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <p
            className={`${
              darkMode ? "text-white" : "text-black"
            } text-xl mb-2 mt-2`}
          >
            Job Title
          </p>
          <input
            type="text"
            className="w-full lg:w-[35rem] h-10 rounded px-2"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <p
            className={`${
              darkMode ? "text-white" : "text-black"
            } text-xl mb-2 mt-2`}
          >
            What Kind of invesment are you interested in?
          </p>
          <select
            className="select select-primary border-[#A7AD2E] w-full lg:w-[35rem]"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option disabled selected>
              Select Category
            </option>
            {categories.map((category) => (
              <option key={category._id}>{category.messageCategory}</option>
            ))}
          </select>
        </div>
        <div>
          <p
            className={`${
              darkMode ? "text-white" : "text-black"
            } text-xl mb-2 mt-2`}
          >
            Message
          </p>
          <textarea
            type="text"
            className="w-full lg:w-[35rem] h-[10rem] rounded p-2"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div className="mt-4 mb-10">
          <input
            type="submit"
            value={"Submit Message"}
            className="btn btn-primary bg-[#8c921d] hover:bg-[#a1a42d] border-none text-white"
            // disabled={!isFormValid}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

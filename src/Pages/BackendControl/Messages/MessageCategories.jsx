import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from "react-hot-toast";

const MessageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // category state
  const [messageCategory, setMessageCategory] = useState("");

  // fetched data
  const fetchedData = async () => {
    try {
      const response = await axios.get(
        "https://chuti-harmony-server.vercel.app/api/v1/message-category/message-category"
      );
      if (response.data.data) {
        setCategories(response.data.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchedData();
  }, []); // Remove categories from dependency array to prevent infinite loop

  const handleAddCategory = async (event) => {
    event.preventDefault();

    const formData = { messageCategory };

    try {
      const response = await axios.post(
        "https://chuti-harmony-server.vercel.app/api/v1/message-category/message-category",
        formData
      );
      console.log("Form Submitted successfully");
      if (response.data) {
        toast.success("Successfully created the category");
        setMessageCategory("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // remove category from database
  const handleDeleteCategory = async (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const response = await axios.delete(
          `https://chuti-harmony-server.vercel.app/api/v1/message-category/message-category/${categoryId}`
        );
        if (response.data) {
          toast.success("Category deleted Successfully");
          setCategories((previousCategories) =>
            previousCategories.filter((category) => category._id !== categoryId)
          );
        }
      } catch (error) {
        console.log(error);
        toast.error("Error deleting category");
      }
    }
  };
  return (
    <section>
      <div>
        <h1 className="text-3xl font-bold mb-4 underline">Categories</h1>
      </div>
      <div className="mb-5">
        {/* Displaying categories as a list */}
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category._id}
              className="flex justify-between items-center border border-gray-500 rounded px-5"
            >
              <span>{category.messageCategory}</span>
              <button
                onClick={() => handleDeleteCategory(category._id)}
                className="ml-2 text-red-500 cursor-pointer"
              >
                <RiDeleteBin6Line className="text-3xl text-[#8E8A20]" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-primary text-white bg-[#8E8A20] border-none"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Add Category
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Add New Category</h3>
            <form onSubmit={handleAddCategory}>
              <input
                className="w-full my-2 p-5 rounded border-2 border-black mb-3"
                type="text"
                placeholder="Type Here What's on your mind ? "
                value={messageCategory}
                onChange={(event) => setMessageCategory(event.target.value)}
              />
              <input
                className="btn btn-success hover:bg-[#8E8A20] border-none text-white"
                type="submit"
                value="Add Category"
              />
            </form>

            <div className="modal-action -mt-5">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn btn-error text-white">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </section>
  );
};

export default MessageCategories;

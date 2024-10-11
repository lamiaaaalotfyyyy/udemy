import React, { useState } from "react";

const NewLectureForm = ({
  sectionIndex,
  setLectureFormVisible,
  handleAddItem,
}) => {
  const [newLectureTitle, setNewLectureTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateAndAddLecture = () => {
    if (newLectureTitle.trim().length == 0) {
      setErrorMessage("This field may not be blank.");
      return;
    }
    if (newLectureTitle.trim().length < 3) {
      setErrorMessage("Title must be at least 3 characters long.");
      return;
    }
    setErrorMessage(""); // Clear error message if valid
    handleAddItem(sectionIndex, "lecture", newLectureTitle);
    setLectureFormVisible(null); // Close the form after adding
  };

  return (
    <div className="flex p-4 border border-black mr-2 bg-white">
      <p>New Lecture:</p>
      <div className="flex-1 ml-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter title"
            value={newLectureTitle}
            onChange={(e) => setNewLectureTitle(e.target.value)}
            maxLength={80}
            className={`border pl-4 pr-8 py-1 w-full outline-none ${
              errorMessage ? "border-2 border-orange-300" : "border-black"
            }`}
          />
          <span className="text-gray-500 absolute right-3 top-1">
            {80 - newLectureTitle.length}
          </span>
        </div>
        {errorMessage && (
          <p className="text-red-900 text-xs mt-2">{errorMessage}</p>
        )}
        <div className="flex justify-end flex-1 mt-10">
          <button
            onClick={() => setLectureFormVisible(null)}
            className="font-medium text-black px-3 py-1"
          >
            Cancel
          </button>
          <button
            onClick={validateAndAddLecture}
            className="bg-black font-medium text-white px-3 py-1"
          >
            Add Lecture
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewLectureForm;

import React, { useState } from "react";
import RichText3 from "../RichText3/RichText";

const NewQuizForm = ({ sectionIndex, setQuizFormVisible, handleAddItem }) => {
  const [newQuizTitle, setNewQuizTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [newQuizContent, setNewQuizContent] = useState("");

  const validateAndAddQuiz = () => {
    // Input validation
    if (newQuizTitle.trim().length === 0) {
      setErrorMessage("This field may not be blank.");
      return;
    }
    if (newQuizTitle.trim().length < 3) {
      setErrorMessage("Title must be at least 3 characters long.");
      return;
    }
    setErrorMessage(""); // Clear error message if valid

    // Add the quiz
    handleAddItem(sectionIndex, "quiz", newQuizTitle, newQuizContent);
    console.log("Description:", newQuizContent); // Log the content for debugging

    // Reset fields and close the form
    setNewQuizTitle("");
    setNewQuizContent("");
    setQuizFormVisible(null);
  };

  return (
    <div className="flex p-4 border border-black mr-2 bg-white">
      <label htmlFor="quiz-title" className="font-medium">
        New Quiz:
      </label>
      <div className="flex-1 ml-3">
        <div className="relative">
          <input
            id="quiz-title"
            type="text"
            placeholder="Enter title"
            value={newQuizTitle}
            onChange={(e) => setNewQuizTitle(e.target.value)}
            maxLength={80}
            className={`border border-black pl-4 pr-8 py-1 w-full outline-none ${
              errorMessage ? "border-2 border-orange-300" : "border-black"
            }`}
          />
          <span className="text-gray-500 absolute right-3 top-1">
            {80 - newQuizTitle.length}
          </span>
        </div>
        {errorMessage && (
          <p className="text-red-900 text-xs mt-2">{errorMessage}</p>
        )}
        <div className="mt-3">
          <RichText3
            content={newQuizContent}
            onChange={(newContent) => setNewQuizContent(newContent)}
            placeholder="Enter quiz description..." // Optional placeholder for clarity
          />
        </div>
        <div className="flex justify-end flex-1 mt-10">
          <button
            onClick={() => setQuizFormVisible(null)}
            className="font-medium text-black px-3 py-1"
          >
            Cancel
          </button>
          <button
            onClick={validateAndAddQuiz}
            className="bg-black font-medium text-white px-3 py-1"
          >
            Add Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewQuizForm;

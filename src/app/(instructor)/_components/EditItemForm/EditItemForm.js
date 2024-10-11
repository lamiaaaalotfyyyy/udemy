import React, { useState } from "react";
import RichText3 from "../RichText3/RichText";
import { IoIosCheckmarkCircle } from "react-icons/io";

const EditItemForm = ({
  item,
  sectionIndex,
  itemIndex,
  editLectureTitle,
  setEditedLectureTitle,
  editQuizDescription,
  setEditQuizDescription,
  handleSaveLectureTitle,
  setEditLectureIndex,
  getItemNumber,
}) => {
  return (
    <>
      <div className="my-4 ml-20 mr-2 p-3 flex items-center border border-gray-600 bg-white group cursor-move">
        <div className="flex items-start flex-1 gap-2">
          <div className="flex items-center gap-2">
            <IoIosCheckmarkCircle className="text-gray-800" />
            <h3 className="font-medium">
              {item.type === "lecture" ? "Lecture" : "Quiz"}
              {getItemNumber(sectionIndex, itemIndex)}:
            </h3>
          </div>
          <div className="flex-1">
            {/* Input for editing title */}
            <input
              type="text"
              value={editLectureTitle}
              onChange={(e) => setEditedLectureTitle(e.target.value)}
              className="border border-black pl-2 px-4 py-1 w-full"
            />

            {/* Conditional rendering for quiz content */}
            {item.type === "quiz" ? (
              <div className="mt-3">
                <RichText3
                  content={editQuizDescription}
                  onChange={(newContent) => setEditQuizDescription(newContent)}
                />
              </div>
            ) : null}

            {/* Save and Cancel buttons */}
            <div className="flex gap-4 mt-4 justify-end">
              <button
                className="font-bold text-black"
                onClick={() => {
                  setEditLectureIndex(null); // Cancel editing
                }}
              >
                Cancel
              </button>

              {/* Save button for either lecture or quiz */}
              <button
                className="bg-gray-900 font-bold text-white px-4 py-1"
                onClick={() => handleSaveLectureTitle(sectionIndex, itemIndex)}
              >
                {item.type === "quiz" ? "Save Quiz" : "Save Lecture"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditItemForm;

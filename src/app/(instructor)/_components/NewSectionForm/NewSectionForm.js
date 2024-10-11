import React, { useState } from "react";

const NewSectionForm = ({
  sectionIndex,
  sections,
  setEditSectionIndex,
  handleSaveSectionTitle,
}) => {
  const [editedSectionTitle, setEditedSectionTitle] = useState(
    sections[sectionIndex]?.title || ""
  );
  const [editedObjective, setEditedObjective] = useState(
    sections[sectionIndex]?.objective || ""
  );

  return (
    <>
      <div className="flex gap-3 border border-black p-4 bg-white m-2 items-start">
        <div className="bold">Section {sectionIndex + 1}:</div>

        <div className="flex-1">
          <input
            type="text"
            value={editedSectionTitle}
            onChange={(e) => setEditedSectionTitle(e.target.value)}
            className="border border-black pl-2 px-4 py-1 w-full"
          />
          <div className="mt-4">
            <p className="font-bold text-sm">
              What will students be able to do at the end of this section?
            </p>
            <input
              type="text"
              value={editedObjective}
              onChange={(e) => setEditedObjective(e.target.value)}
              className="border border-black pl-2 px-4 py-1 my-2 w-full"
            />
          </div>
          <div className="flex gap-4 justify-end">
            <button
              className="font-bold text-black"
              onClick={() => {
                setEditSectionIndex(null); // Close the form without saving
              }}
            >
              Cancel
            </button>
            <button
              className="bg-gray-900 font-bold text-white px-4 py-1"
              onClick={() => {
                handleSaveSectionTitle(
                  sectionIndex,
                  editedSectionTitle,
                  editedObjective
                ); // Pass both the updated title and objective
                setEditSectionIndex(null); // Close the form after saving
              }}
            >
              Save Section
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSectionForm;

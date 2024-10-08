import React, { useState } from "react";

const ExpandedSection = ({ onCancel, onAddSection }) => {
  const [title, setTitle] = useState("");
  const [objective, setObjective] = useState("");
  const [titleError, setTitleError] = useState(false);

  const handleAddSection = () => {
    if (title.trim() === "") {
      setTitleError(true);
      return;
    }

    setTitleError(false);
    onAddSection(title, objective);
  };

  return (
    <div className="px-2 py-4 bg-white border border-gray-600">
      <div className="mb-1 flex items-center gap-2">
        <div>
          <p className="text-gray-700 font-bold mb-2">New section:</p>
        </div>
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Enter a Title"
            className={`appearance-none block w-full text-gray-700 border ${
              titleError ? "border-2 border-orange-300" : "border-black"
            } p-2 mb-1 leading-tight focus:outline-none focus:bg-white pr-12`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className={`absolute right-2 bottom-3 pr-1 text-gray-500`}>
            80
          </span>
        </div>
      </div>
      {titleError && (
        <div className="text-red-900 text-xs mt-1 mb-3 ml-[105px]">
          This field may not be blank.
        </div>
      )}
      <div className="ml-[105px] mb-4">
        <label className="block text-sm text-gray-700 font-bold mb-2">
          What will students be able to do at the end of this section?
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter a Learning Objective"
            className="appearance-none block w-full text-gray-700 border border-black p-2 mb-3 leading-tight focus:outline-none focus:bg-white pr-12"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          />
          <p className="absolute right-2 bottom-2 pr-1 text-gray-500">200</p>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button className="px-4 py-2 border border-gray-800" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-black text-white"
          onClick={handleAddSection}
        >
          Add Section
        </button>
      </div>
    </div>
  );
};

export default ExpandedSection;

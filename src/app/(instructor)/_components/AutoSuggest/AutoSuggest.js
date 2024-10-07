"use client";
import React, { useEffect, useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";

const AutoSuggest = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [isProposeMode, setIsProposeMode] = useState(false);

  // Sample data for suggestions
  const data = [
    "Landscape Photography",
    "Portrait Photography",
    "Wildlife Photography",
    "Street Photography",
    "Sports Photography",
    "Macro Photography",
    "Aerial Photography",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      const filteredSuggestions = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setIsExpanded(true);
    } else {
      setSuggestions([]);
      setIsExpanded(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (!selectedTopics.includes(suggestion)) {
      setSelectedTopics((prev) => [...prev, suggestion]);
    }
    setInputValue("");
    setSuggestions([]);
    setIsExpanded(false);
  };

  const handleRemoveTopic = (topic) => {
    setSelectedTopics(selectedTopics.filter((t) => t !== topic));
  };

  const handleProposeAnotherTopic = () => {
    setIsProposeMode(true);
    setInputValue("");
  };

  useEffect(() => {
    setIsProposeMode(selectedTopics.length === 0);
  }, [selectedTopics]);

  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="relative w-full">
      <div className="flex flex-wrap gap-2 mb-2 w-full md:w-[50%]">
        {selectedTopics.map((topic) => (
          <div
            key={topic}
            className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-white bg-gray-800 rounded-full"
          >
            {topic}
            <button
              onClick={() => handleRemoveTopic(topic)}
              className="ml-2 text-white"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      {isProposeMode ? (
        // Input for proposing new topics
        <input
          aria-invalid="false"
          placeholder="e.g. Landscape Photography"
          autoComplete="off"
          aria-expanded={isExpanded}
          aria-haspopup="listbox"
          role="combobox"
          id="autosuggest-input"
          type="text"
          className="block p-3 border border-black rounded-md text-gray-800 outline-none w-full md:w-[50%]"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsExpanded(inputValue.length > 0)}
        />
      ) : (
        // Propose another topic link
        <div className="cursor-pointer" onClick={handleProposeAnotherTopic}>
          <span className="text-gray-600 text-xs underline">
            Propose another topic...
          </span>
        </div>
      )}

      {isExpanded && suggestions.length > 0 && (
        <div
          role="listbox"
          className="absolute w-full md:w-[50%] left-0 right-0 z-10 mt-1 px-4 bg-white border border-gray-300 rounded-md shadow-lg max-h-56 overflow-auto"
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="p-2 my-2  cursor-pointer text-sm font-medium border border-black rounded-3xl hover:bg-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
      {selectedTopics.length > 1 && (
        <>
          <div className="flex items-center gap-2 my-4">
            <h2 className="font-bold text-base">
              From the topics you have selected, which is the most
              representative topic?
            </h2>
            <button
              type="button"
              onMouseEnter={() => setTooltipVisible(true)}
              onMouseLeave={() => setTooltipVisible(false)}
              className="focus:outline-none"
            >
              <IoMdInformationCircle className="text-xl" />
            </button>

            {tooltipVisible && (
              <div
                id="tooltip-right"
                role="tooltip"
                className="absolute z-10 left-[600px] w-[300px] inline-block p-6 text-sm text-gray-600 bg-white border border-gray-200"
              >
                Which topic do you spend the most time covering in your course?
                If you believe two topics are equally representative of your
                entire course, select either one. All of the topics listed will
                still count as being taught in your course.{" "}
                <a
                  href="#"
                  className="text-violet-700 underline underline-offset-2"
                >
                  Learn more.
                </a>
              </div>
            )}
          </div>
          <div className="border border-black p-3 w-full md:w-[50%]">
            <select
              id="level-options"
              name="level"
              required
              className="block w-full text-base focus:outline-none bg-transparent text-gray-800"
            >
              <option value="0">Select a primary topic</option>
              {selectedTopics.map((topic) => {
                return (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                );
              })}
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default AutoSuggest;

"use client";
import React, { useState } from "react";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { FaPen, FaTrash } from "react-icons/fa";
import { IoIosMenu, IoIosCheckmarkCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import ExpandedSection from "../../_components/ExpandedSection/ExpandedSection";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Curriculum = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [sections, setSections] = useState([
    {
      title: "Section 1",
      lectures: [
        { title: "Lecture 1", content: "Content of Lecture 1" },
        { title: "Lecture 2", content: "Content of Lecture 2" },
        { title: "Lecture 3", content: "Content of Lecture 3" },
      ],
    },
    {
      title: "Section 2",
      lectures: [
        { title: "Lecture 1", content: "Content of Lecture 1" },
        { title: "Lecture 2", content: "Content of Lecture 2" },
        { title: "Lecture 3", content: "Content of Lecture 3" },
      ],
    },
  ]);

  const toggleFormVisibility = () => {
    setFormVisible((prev) => !prev);
  };

  const handleCancel = () => {
    setFormVisible(false);
  };

  const handleAddSection = (title, objective) => {
    const newSection = { title, objective, lectures: [] };
    setSections((prevSections) => [...prevSections, newSection]);
    setFormVisible(false);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Handle section reordering
    if (
      source.droppableId === "droppable" &&
      destination.droppableId === "droppable"
    ) {
      const reorderedSections = Array.from(sections);
      const [movedSection] = reorderedSections.splice(source.index, 1);
      reorderedSections.splice(destination.index, 0, movedSection);
      setSections(reorderedSections);
    }
    // Handle lecture moving
    else if (source.droppableId !== destination.droppableId) {
      const sourceSectionIndex = source.droppableId;
      const destinationSectionIndex = destination.droppableId;

      const sourceSection = sections[sourceSectionIndex];
      const destinationSection = sections[destinationSectionIndex];

      const [movedLecture] = sourceSection.lectures.splice(source.index, 1);
      destinationSection.lectures.splice(destination.index, 0, movedLecture);

      const updatedSections = [...sections];
      updatedSections[sourceSectionIndex] = sourceSection;
      updatedSections[destinationSectionIndex] = destinationSection;

      setSections(updatedSections);
    }
    // Handle lecture reordering within the same section
    else {
      const reorderedLectures = Array.from(
        sections[source.droppableId].lectures
      );
      const [movedLecture] = reorderedLectures.splice(source.index, 1);
      reorderedLectures.splice(destination.index, 0, movedLecture);

      const updatedSections = [...sections];
      updatedSections[source.droppableId] = {
        ...updatedSections[source.droppableId],
        lectures: reorderedLectures,
      };

      setSections(updatedSections);
    }
  };

  // Calculate the total number of lectures
  const getLectureNumber = (sectionIndex, lectureIndex) => {
    let totalLectures = 0;

    for (let i = 0; i < sectionIndex; i++) {
      totalLectures += sections[i].lectures.length;
    }

    return totalLectures + lectureIndex + 1;
  };

  return (
    <>
      <div className="py-4 px-7 lg:px-10">
        <div>
          <p className="my-2">
            Start putting together your course by creating sections, lectures,
            and practice (quizzes, coding exercises, and assignments).
          </p>
          <p>
            Start putting together your course by creating sections, lectures,
            and practice activities{" "}
            <span className="text-[#5022c3] underline underline-offset-4 cursor-pointer hover:text-[#3b198f]">
              (quizzes, coding exercises, and assignments).
            </span>
            Use your{" "}
            <span className="text-[#5022c3] underline underline-offset-4 cursor-pointer hover:text-[#3b198f]">
              course outline
            </span>{" "}
            to structure your content and label your sections and lectures
            clearly. If you’re intending to offer your course for free, the
            total length of video content must be less than 2 hours.
          </p>
        </div>

        <DragDropContext onDragEnd={onDragEnd} >
          <Droppable droppableId="droppable" type="SECTION">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="my-8"
              >
                {sections.map((section, index) => (
                  <Draggable
                    key={index}
                    draggableId={`section-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="border border-gray-600 bg-gray-100 my-4"
                      >
                        <div
                          {...provided.dragHandleProps}
                          className="py-4 px-2 flex gap-4 group"
                        >
                          <div className="flex gap-2">
                            <h2 className="font-bold">Section {index + 1}:</h2>
                            <div className="flex items-center gap-2">
                              <MdOutlineInsertDriveFile />
                              <p>{section.title}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between flex-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-4">
                              <FaPen className="text-xs cursor-pointer" />
                              <FaTrash className="text-xs cursor-pointer" />
                            </div>
                            <div>
                              <IoIosMenu className="text-2xl" />
                            </div>
                          </div>
                        </div>

                        {/* Render Lectures inside each section */}
                        <Droppable droppableId={`${index}`} type="LECTURE">
                          {(provided) => (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                            >
                              {section.lectures.length > 0
                                ? section.lectures.map(
                                    (lecture, lectureIndex) => (
                                      <Draggable
                                        key={lectureIndex}
                                        draggableId={`lecture-${index}-${lectureIndex}`}
                                        index={lectureIndex}
                                      >
                                        {(provided) => (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="my-4 ml-20 mr-2 p-3 flex items-center border border-gray-600 bg-white group cursor-move"
                                          >
                                            <div className="flex items-center gap-4 flex-1">
                                              <IoIosCheckmarkCircle className="text-gray-800" />
                                              <h3 className="font-medium">
                                                Lecture{" "}
                                                {getLectureNumber(
                                                  index,
                                                  lectureIndex
                                                )}
                                                :
                                              </h3>
                                              <div className="flex items-center gap-2">
                                                <MdOutlineInsertDriveFile />
                                                <p>{lecture.content}</p>
                                              </div>
                                              <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <FaPen className="text-xs cursor-pointer" />
                                                <FaTrash className="text-xs cursor-pointer" />
                                              </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                              <button className="flex items-center gap-2 border border-gray-800 py-[3px] px-2 font-medium hover:bg-gray-100">
                                                <FaPlus /> Content
                                              </button>
                                              <IoIosMenu className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                          </div>
                                        )}
                                      </Draggable>
                                    )
                                  )
                                : null}
                              {provided.placeholder}

                              {/* Add new curriculum item button */}
                              <div className="my-4 ml-20">
                                <button className="flex items-center gap-2 border border-gray-800 py-[4px] px-2 font-medium hover:bg-gray-100 bg-white">
                                  <FaPlus /> Curriculum item
                                </button>
                              </div>
                            </div>
                          )}
                        </Droppable>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* "Add Section" Button */}
          <div className="my-4">
            <button
              className={`flex items-center gap-2 border border-gray-800 py-[6px] px-3 font-medium bg-white transition-all ${
                isFormVisible ? "border-transparent" : "hover:bg-gray-100"
              }`}
              onClick={toggleFormVisibility}
            >
              <FaPlus
                className={`transition-transform duration-300 ${
                  isFormVisible ? "-rotate-45 -translate-x-4" : ""
                }`}
              />
              <span
                className={`transition-opacity ${
                  isFormVisible ? "opacity-0 hidden" : "opacity-100"
                }`}
              >
                Section
              </span>
            </button>
          </div>
        </DragDropContext>

        {/* Render the form when "Add Section" is clicked */}
        {isFormVisible && (
          <ExpandedSection
            onCancel={handleCancel}
            onAddSection={handleAddSection}
          />
        )}
      </div>
    </>
  );
};

export default Curriculum;

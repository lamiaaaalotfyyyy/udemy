"use client";
import React, { useState } from "react";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { FaBook, FaPen, FaQuestion, FaTrash } from "react-icons/fa";
import { IoIosMenu, IoIosCheckmarkCircle, IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import ExpandedSection from "../../_components/ExpandedSection/ExpandedSection";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { GoQuestion } from "react-icons/go";
import NewSectionForm from "../../_components/NewSectionForm/NewSectionForm";
import EditItemForm from "../../_components/EditItemForm/EditItemForm";
import NewLectureForm from "../../_components/NewLectureForm/NewLectureForm";
import NewQuizForm from "../../_components/NewQuizForm/NewQuizForm";
import AddContentForm from "../../_components/AddContentForm/AddContentForm";

const Curriculum = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [addContent, setAddContent] = useState(null);
  const [visibleSectionIndex, setVisibleSectionIndex] = useState(null);
  const [lectureFormVisible, setLectureFormVisible] = useState(null);
  const [quizFormVisible, setQuizFormVisible] = useState(null);
  const [editSectionIndex, setEditSectionIndex] = useState(null);
  const [editLectureIndex, setEditLectureIndex] = useState(null);
  const [editLectureTitle, setEditedLectureTitle] = useState("");
  const [editQuizDescription, setEditQuizDescription] = useState("");
  const [sections, setSections] = useState([
    {
      title: "Section 1",
      objective: "objective",
      items: [
        {
          type: "lecture",
          title: "Lecture 1",
          content: "Content of Lecture 1",
        },
        { type: "quiz", title: "Quiz 1", description: "Quiz Description" },
        {
          type: "lecture",
          title: "Lecture 2",
          content: "Content of Lecture 2",
        },
      ],
    },
    {
      title: "Section 2",
      objective: "objective",
      items: [
        {
          type: "lecture",
          title: "Lecture 1",
          content: "Content of Lecture 1",
        },
        { type: "quiz", title: "Quiz 1", description: "Quiz Description" },
        {
          type: "lecture",
          title: "Lecture 2",
          content: "Content of Lecture 2",
        },
      ],
    },
  ]);

  const handleSaveSectionTitle = (index, newTitle, newObjective) => {
    const updatedSections = [...sections];
    updatedSections[index].title = newTitle; // Update section title
    updatedSections[index].objective = newObjective; // Update section objective
    setSections(updatedSections);
  };

  const handleEditLectureTitle = (sectionIndex, lectureIndex) => {
    setEditLectureIndex(`${sectionIndex}-${lectureIndex}`);
    setEditedLectureTitle(sections[sectionIndex].items[lectureIndex].title);
    setEditQuizDescription(
      sections[sectionIndex].items[lectureIndex].description
    );
  };

  const handleSaveLectureTitle = (sectionIndex, lectureIndex) => {
    // Save the updated title and content
    const updatedSections = [...sections];
    updatedSections[sectionIndex].items[lectureIndex].title = editLectureTitle;
    updatedSections[sectionIndex].items[lectureIndex].description =
      editQuizDescription;
    setSections(updatedSections);
    setEditLectureIndex(null);
  };

  const toggleFormVisibility = () => {
    setFormVisible((prev) => !prev);
  };

  const handleCancel = () => {
    setFormVisible(false);
  };

  const handleAddSection = (title, objective) => {
    const newSection = { title, objective, items: [] };
    setSections((prevSections) => [...prevSections, newSection]);
    setFormVisible(false);
  };

  const toggleCurriculumVisibility = (index) => {
    if (visibleSectionIndex === index) {
      setVisibleSectionIndex(null);
      setLectureFormVisible(null); // Hide if already visible
      setQuizFormVisible(null);
    } else {
      setVisibleSectionIndex(index); // Show the clicked section
    }
  };

  const handleLectureFormVisibility = (index) => {
    setLectureFormVisible((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleQuizFormVisibility = (index) => {
    setQuizFormVisible((prevIndex) => (prevIndex === index ? null : index));
    setEditQuizDescription("");
  };

  const handleAddItem = (sectionIndex, type, newItemTitle, newQuizContent) => {
    const newItem = {
      type,
      title: newItemTitle,
      description: type === "quiz" ? newQuizContent : "", // Only set description for quizzes
      content: type === "lecture" ? "" : "", // This is fine for lectures
    };
    const updatedSections = [...sections];
    updatedSections[sectionIndex].items.push(newItem);
    setSections(updatedSections);

    // Reset the form visibility and related states
    setLectureFormVisible(null);
    setQuizFormVisible(null);
    setEditQuizDescription("");
    setVisibleSectionIndex(null);
  };

  const handleDeleteItem = (sectionIndex, itemIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].items.splice(itemIndex, 1);
    setSections(updatedSections);
  };

  const handleDeleteSection = (index) => {
    const updatedSections = sections.filter(
      (_, sectionIndex) => sectionIndex !== index
    );
    setSections(updatedSections);
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
    // Handle item moving between sections
    else if (source.droppableId !== destination.droppableId) {
      const sourceSectionIndex = parseInt(source.droppableId);
      const destinationSectionIndex = parseInt(destination.droppableId);

      const sourceSection = sections[sourceSectionIndex];
      const destinationSection = sections[destinationSectionIndex];

      const [movedItem] = sourceSection.items.splice(source.index, 1);
      destinationSection.items.splice(destination.index, 0, movedItem);

      const updatedSections = [...sections];
      updatedSections[sourceSectionIndex] = sourceSection;
      updatedSections[destinationSectionIndex] = destinationSection;

      setSections(updatedSections);
    }
    // Handle item reordering within the same section
    else {
      const sectionIndex = parseInt(source.droppableId);
      const reorderedItems = Array.from(sections[sectionIndex].items);
      const [movedItem] = reorderedItems.splice(source.index, 1);
      reorderedItems.splice(destination.index, 0, movedItem);

      const updatedSections = [...sections];
      updatedSections[sectionIndex] = {
        ...updatedSections[sectionIndex],
        items: reorderedItems,
      };

      setSections(updatedSections);
    }
  };

  // Calculate the total number of items
  const getItemNumber = (sectionIndex, itemIndex) => {
    let totalLectures = 0;
    let totalQuizzes = 0;

    for (let i = 0; i < sectionIndex; i++) {
      totalLectures += sections[i].items.filter(
        (item) => item.type === "lecture"
      ).length;
      totalQuizzes += sections[i].items.filter(
        (item) => item.type === "quiz"
      ).length;
    }

    // Count the lectures and quizzes in the current section
    const currentSection = sections[sectionIndex];
    totalLectures += currentSection.items
      .slice(0, itemIndex)
      .filter((item) => item.type === "lecture").length;
    totalQuizzes += currentSection.items
      .slice(0, itemIndex)
      .filter((item) => item.type === "quiz").length;

    // Determine if the item is a lecture or quiz for the numbering
    if (currentSection.items[itemIndex].type === "lecture") {
      return totalLectures + 1; // Lecture numbering starts from 1
    } else {
      return totalQuizzes + 1; // Quiz numbering starts from 1
    }
  };
  /****************************************************************** */
  return (
    <div className="py-4 px-7 lg:px-10">
      <div>
        <p className="my-2">
          Start putting together your course by creating sections, lectures, and
          practice (quizzes, coding exercises, and assignments).
        </p>
        <p>
          Use your{" "}
          <span className="text-[#5022c3] underline underline-offset-4 cursor-pointer hover:text-[#3b198f]">
            course outline
          </span>{" "}
          to structure your content and label your sections and lectures
          clearly. If you’re intending to offer your course for free, the total
          length of video content must be less than 2 hours.
        </p>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" type="SECTION">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="my-8"
            >
              {sections.map((section, sectionIndex) => (
                <Draggable
                  key={sectionIndex}
                  draggableId={`section-${sectionIndex}`}
                  index={sectionIndex}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="border border-gray-600 bg-gray-100 my-4"
                    >
                      {editSectionIndex === sectionIndex ? (
                        <NewSectionForm
                          sectionIndex={sectionIndex}
                          sections={sections}
                          setEditSectionIndex={setEditSectionIndex}
                          handleSaveSectionTitle={handleSaveSectionTitle}
                        />
                      ) : (
                        <div
                          {...provided.dragHandleProps}
                          className="py-4 px-2 flex gap-4 group"
                        >
                          <div className="flex gap-2">
                            <h2 className="font-bold">
                              Section {sectionIndex + 1}:
                            </h2>
                            <div className="flex items-center gap-2">
                              <MdOutlineInsertDriveFile />
                              <p>{section.title}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between flex-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-4">
                              <FaPen
                                className="text-xs cursor-pointer"
                                onClick={() =>
                                  setEditSectionIndex(sectionIndex)
                                }
                              />
                              <FaTrash
                                className="text-xs cursor-pointer"
                                onClick={() =>
                                  handleDeleteSection(sectionIndex)
                                }
                              />
                            </div>
                            <div>
                              <IoIosMenu className="text-2xl" />
                            </div>
                          </div>
                        </div>
                      )}

                      <Droppable droppableId={`${sectionIndex}`} type="ITEM">
                        {(provided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {section.items.map((item, itemIndex) => (
                              <Draggable
                                key={`${item.type}-${itemIndex}`}
                                draggableId={`item-${sectionIndex}-${itemIndex}`}
                                index={itemIndex}
                              >
                                {(provided) => (
                                  <>
                                    {editLectureIndex ===
                                    `${sectionIndex}-${itemIndex}` ? (
                                      <EditItemForm
                                        item={item}
                                        sectionIndex={sectionIndex}
                                        itemIndex={itemIndex}
                                        editLectureTitle={editLectureTitle}
                                        setEditedLectureTitle={
                                          setEditedLectureTitle
                                        }
                                        editQuizDescription={
                                          editQuizDescription
                                        }
                                        setEditQuizDescription={
                                          setEditQuizDescription
                                        }
                                        handleSaveLectureTitle={
                                          handleSaveLectureTitle
                                        }
                                        setEditLectureIndex={
                                          setEditLectureIndex
                                        }
                                        getItemNumber={getItemNumber}
                                      />
                                    ) : (
                                      <>
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          className="relative mt-4 ml-20 mr-2 p-3 flex items-center border border-gray-600 bg-white group cursor-move"
                                        >
                                          <div className=" flex items-center gap-4 flex-1">
                                            <IoIosCheckmarkCircle className="text-gray-800" />
                                            <h3 className="font-medium">
                                              {item.type === "lecture"
                                                ? "Lecture"
                                                : "Quiz"}{" "}
                                              {getItemNumber(
                                                sectionIndex,
                                                itemIndex
                                              )}
                                              :
                                            </h3>
                                            <div className="flex items-center gap-2">
                                              {item.type === "lecture" ? (
                                                <MdOutlineInsertDriveFile />
                                              ) : (
                                                <GoQuestion />
                                              )}
                                              <p>{item.title}</p>
                                            </div>
                                            <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                              <FaPen
                                                className="text-xs cursor-pointer"
                                                onClick={() => {
                                                  handleEditLectureTitle(
                                                    sectionIndex,
                                                    itemIndex
                                                  );
                                                }}
                                              />
                                              <FaTrash
                                                className="text-xs cursor-pointer"
                                                onClick={() =>
                                                  handleDeleteItem(
                                                    sectionIndex,
                                                    itemIndex
                                                  )
                                                }
                                              />
                                            </div>
                                          </div>
                                          <div className="flex items-center gap-4">
                                            {item.type === "lecture" ? (
                                              <>
                                                <button
                                                  className={`flex items-center gap-2 border border-gray-800 py-[3px] px-2 font-medium hover:bg-gray-100 ${
                                                    addContent ===
                                                      `${sectionIndex}-${itemIndex}` &&
                                                    "hidden"
                                                  }`}
                                                  onClick={() =>
                                                    setAddContent(
                                                      `${sectionIndex}-${itemIndex}`
                                                    )
                                                  }
                                                >
                                                  <FaPlus /> Content
                                                </button>
                                                {addContent ===
                                                  `${sectionIndex}-${itemIndex}` && (
                                                  <div className="absolute right-10 -bottom-[1px] bg-white flex items-center gap-2 border border-black border-b-0 p-1 cursor-default">
                                                    <p className="font-bold">
                                                      Select contetn type
                                                    </p>
                                                    <IoMdClose
                                                      className="text-lg cursor-pointer"
                                                      onClick={() =>
                                                        setAddContent(null)
                                                      }
                                                    />
                                                  </div>
                                                )}
                                              </>
                                            ) : (
                                              <button className="flex items-center gap-2 border border-gray-800 py-[3px] px-2 font-medium hover:bg-gray-100">
                                                <FaPlus /> Question
                                              </button>
                                            )}

                                            <IoIosMenu className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                          </div>
                                        </div>
                                        {addContent ===
                                          `${sectionIndex}-${itemIndex}` && (
                                          <AddContentForm />
                                        )}
                                      </>
                                    )}
                                  </>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}

                            {/* Add new curriculum item button */}
                            <div className="my-4 ml-20">
                              <button
                                className={`flex items-center gap-2 border border-gray-800 py-[6px] px-3 font-medium transition-all ${
                                  visibleSectionIndex === sectionIndex
                                    ? "border-transparent bg-transparent h-0"
                                    : "hover:bg-gray-100 bg-white"
                                }`}
                                onClick={() =>
                                  toggleCurriculumVisibility(sectionIndex)
                                }
                              >
                                <FaPlus
                                  className={`transition-transform duration-900 text-xl ${
                                    visibleSectionIndex === sectionIndex
                                      ? "rotate-45 -translate-x-11 -translate-y-3"
                                      : ""
                                  }`}
                                />
                                <span
                                  className={`transition-opacity ${
                                    visibleSectionIndex === sectionIndex
                                      ? "opacity-0 hidden"
                                      : "opacity-100"
                                  }`}
                                >
                                  Curriculum item
                                </span>
                              </button>

                              {/* Add lecture or quiz only for the visible section */}
                              {visibleSectionIndex === sectionIndex &&
                                lectureFormVisible !== sectionIndex &&
                                quizFormVisible !== sectionIndex && (
                                  <div className="flex gap-4 border border-black border-dashed bg-white mr-2 p-4">
                                    <button
                                      className="flex items-center text-violet-800 hover:text-violet-950 gap-2"
                                      onClick={() =>
                                        handleLectureFormVisibility(
                                          sectionIndex
                                        )
                                      }
                                    >
                                      <FaPlus />
                                      <p className="font-bold">Lecture</p>
                                    </button>

                                    <button
                                      className="flex items-center text-violet-800 hover:text-violet-950 gap-2"
                                      onClick={() =>
                                        handleQuizFormVisibility(sectionIndex)
                                      }
                                    >
                                      <FaPlus />
                                      <p className="font-bold">Quiz</p>
                                    </button>
                                  </div>
                                )}

                              {lectureFormVisible === sectionIndex && (
                                <NewLectureForm
                                  sectionIndex={sectionIndex}
                                  setLectureFormVisible={setLectureFormVisible}
                                  handleAddItem={handleAddItem}
                                />
                              )}
                              {quizFormVisible === sectionIndex && (
                                <NewQuizForm
                                  sectionIndex={sectionIndex}
                                  setQuizFormVisible={setQuizFormVisible}
                                  handleAddItem={handleAddItem}
                                />
                              )}
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
      </DragDropContext>

      {/* Add Section Button */}
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

      {/* Section Form */}
      {isFormVisible && (
        <ExpandedSection
          onCancel={handleCancel}
          onAddSection={handleAddSection}
        />
      )}
    </div>
  );
};

export default Curriculum;

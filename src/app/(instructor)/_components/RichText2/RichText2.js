"use client";
import React, { useState } from "react";
import Tiptap from "./Tiptap";

const RichText2 = () => {
  const [content, setContent] = useState("");
  const maxChars = 1000;

  const handleContextChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <>
      <Tiptap
        content={content}
        onChange={handleContextChange}
        maxChars={maxChars}
      />
    </>
  );
};

export default RichText2;

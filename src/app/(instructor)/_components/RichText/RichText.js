"use client";
import React, { useState } from "react";
import Tiptap from "./Tiptap";

const RichText = () => {
  const [content, setContent] = useState("");
  const handleContextChange = (cont) => {
    setContent(cont);
  };
  return (
    <>
      <Tiptap
        content={content}
        onChange={(newContent) => handleContextChange(newContent)}
      />
    </>
  );
};

export default RichText;

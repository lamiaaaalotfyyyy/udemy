"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";

const Tiptap = ({ onChange, content }) => {
  const handleChange = (content) => {
    onChange(content);
  };
  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      ListItem,
      OrderedList,
      Placeholder.configure({
        placeholder: "Insert your course description.",
        defaultNode: "paragraph",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border border-gray-800 w-full focus:outline-none min-h-[70px]",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <>
      <div className="w-full">
        <Toolbar editor={editor} content={content} />
        <EditorContent
          style={{ whiteSpace: "pre-line" }}
          editor={editor}
          className="appearance-none"
        />
      </div>
    </>
  );
};

export default Tiptap;

'use client';
import Editor from "@/components/Editor";
import MDX from "@/components/MDX";
import SideNav from "@/components/SideNav";
import TopMenu from "@/components/TopMenu";
import { useState } from "react";

export default function NotesPage() {
  const [isEditable, setIsEditable] = useState(true);
  const [showSideNav, setShowSideNav] = useState(false);
  const [text, setText] = useState('');

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  }

  return (
    <main>
      <TopMenu isEditable={isEditable} toggleEditable={toggleEditable}/>
      {showSideNav && <SideNav/>}
      {
        isEditable ?
        <Editor text={text} setText={setText} />
        :
        <MDX text={text} />
      }
    </main>
  );
}
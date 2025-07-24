'use client';
import Editor from "@/components/Editor";
import MDX from "@/components/MDX";
import SideNav from "@/components/SideNav";
import TopMenu from "@/components/TopMenu";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";

export default function NotesPage() {
  const {currentUser, isUserLoading} = useAuth();
  const [isEditable, setIsEditable] = useState(true);
  const [showSideNav, setShowSideNav] = useState(true);
  // const [text, setText] = useState('');
  const [note, setNote] = useState({
    content: '',
  });
  const [noteIds, setNoteIds] = useState([]);
  const [savingNote, setSavingNote] = useState(false);

  if (isUserLoading) {
    return <div>Loading...</div>;
  }
  
  if (!currentUser){
    window.location.href = '/';
  }
  
  const toggleEditable = () => {
    setIsEditable(!isEditable);
  }

  function handleCreateNote() {
    // Logic to create a new note
    setNote({
      content: '',
    })
  }
  function handleEditNote(e) {
    // Logic to create a new note
    setNote({
      ...note,
      content: e.target.value,
    });
  }
  async function handleSaveNote() {
  
    if (!note?.content) {
      return;
    }

    setSavingNote(true);

    try{
      if (note.id){
        const noteRef = doc(db, 'users', currentUser.uid, 'notes', note.id)
        await setDoc(noteRef, {
            ...note
        }, { merge: true })
      }else{
        const newId = note.content.slice(0, 10).toLowerCase() + '_' + Date.now();
        const noteRef = doc(db, 'users', currentUser.uid, 'notes', newId);
        const newDocInfo = await setDoc(noteRef, {
          content: note.content,
          createdAt: serverTimestamp()
        });
        setNote({...note, id: newId});
      }
    } catch(error){
      console.log("Error saving note:", error.message);
    }finally {
      setSavingNote(false);
    }


  }
  return (
    <main>
      <TopMenu savingNote={savingNote} handleSaveNote={handleSaveNote} isEditable={isEditable} toggleEditable={toggleEditable}/>
      {showSideNav && <SideNav noteIds={noteIds} setNoteIds={setNoteIds} handleCreateNote={handleCreateNote} />}
      {
        isEditable ?
        <Editor text={note.content} setText={handleEditNote} />
        :
        <MDX text={note.content} />
      }
    </main>
  );
}
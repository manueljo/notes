'use client';
import Editor from "@/components/Editor";
import MDX from "@/components/MDX";
import SideNav from "@/components/SideNav";
import TopMenu from "@/components/TopMenu";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Router from "next/navigation";

export default function NotesPage() {
  const {currentUser, isUserLoading} = useAuth();
  const [isEditable, setIsEditable] = useState(true);
  const [showSideNav, setShowSideNav] = useState(false);
  // const [text, setText] = useState('');
  const [note, setNote] = useState({
    content: '',
  });
  const [noteIds, setNoteIds] = useState([]);
  const [savingNote, setSavingNote] = useState(false);
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const router = Router;


   
  const toggleEditable = () => {
    setIsEditable(!isEditable);
  }

  function handleCreateNote() {
    // Logic to create a new note
    setNote({
      content: '',
    })
    setIsEditable(false);
    window.history.replaceState(null, '', '/notes');
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
        const newId = note.content.replaceAll('#', '').slice(0, 13) + '_' + Date.now();
        const noteRef = doc(db, 'users', currentUser.uid, 'notes', newId);
        const newDocInfo = await setDoc(noteRef, {
          content: note.content,
          createdAt: serverTimestamp()
        });
        setNoteIds((prevIds) => [...prevIds, newId]);
        setNote({...note, id: newId});
        window.history.pushState(null, '', `?id=${newId}`);
      }
    } catch(error){
      console.log("Error saving note:", error.message);
    }finally {
      setSavingNote(false);
    } 
  }

   useEffect(() => {
    const value = searchParams.get('id');
    if (!value || !currentUser) {
      return;
    }
    async function fetchNote() {
      if (isLoading) {
        return;
      }
    try{
      setIsLoading(true);
      const noteRef = doc(db, 'users', currentUser.uid, 'notes', value)
      const snapshot = await getDoc(noteRef);
      const docData = snapshot.exists() ? {id: snapshot.id, ...snapshot.data()} : null;
      if (docData) {
        setNote({...docData});
      }
    }catch (error) {
      console.log("Error fetching note:", error.message);
    }finally {
      setIsLoading(false);
      console.log("Note fetched successfully");
    } 
    }

    fetchNote();
  }, [currentUser, searchParams]);

  if (isUserLoading) {
    return <h4>Loading...</h4>;
  }
  
  if (!currentUser){
    // window.location.href = '/';
    router.redirect('/');
  }



  return (
    <main>
      <TopMenu savingNote={savingNote} handleSaveNote={handleSaveNote} setShowSideNav={setShowSideNav} isEditable={isEditable} toggleEditable={toggleEditable}/>
      {showSideNav && <SideNav setShowSideNav={setShowSideNav} setIsEditable={setIsEditable} noteIds={noteIds} setNoteIds={setNoteIds} handleCreateNote={handleCreateNote} />}
      {
        isEditable ?
        <Editor text={note.content} setText={handleEditNote} />
        :
        <MDX text={note.content} />
      }
    </main>
  );
}
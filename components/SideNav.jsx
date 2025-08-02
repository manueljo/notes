import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";

const SideNav = (props) => {
  const { noteIds, setNoteIds, handleCreateNote, setIsEditable, setShowSideNav } = props;
  const {logOut, currentUser} = useAuth();
  const router = useRouter();

  async function deleteNote(noteId) {
    try{
      const noteRef = doc(db, 'users', currentUser.uid, 'notes', noteId);
      await deleteDoc(noteRef);
      setNoteIds((prevIds) => {return prevIds.filter(id => id !== noteId)});
    }catch (error) {
      console.log("Error deleting note:", error.message);
    }finally {
      console.log("Note deleted successfully");
    }
  }

  useEffect(() => {
    if (!currentUser) {
      return
    }
    console.log(currentUser)
    console.log('currentUser')
    async function fetchNoteIds() {
      try{
        const notesRef = collection(db, 'users', currentUser.uid, 'notes');
        const notesSnapshot = await getDocs(notesRef);
        const notesIndexes = notesSnapshot.docs.map((doc) => {
          return doc.id
        });

        setNoteIds(notesIndexes);
      }catch (error) {
        console.log("Error fetching notes:", error.message);
      }finally {
        console.log("Notes fetched successfully");
      }
    }
      fetchNoteIds();
      console.log(noteIds);
  }, []);


  return (
    <section className="side-nav">
      <h1>NOTES</h1>
      <button className="close" onClick={() => {setShowSideNav(false)}}>X</button>
      <button onClick={handleCreateNote} className="btn btn-primary">Add Note</button>
      <div className="notes-list">
        {noteIds.length === 0 ? (
          <div>
            <span>No Note Available</span>
          </div>
        ) : (
          noteIds.map((note, index) => {
            const [noteText, noteDate] = note.split('_');
            const date = (new Date(parseInt(noteDate))).toString();
            
            return (
            <button onClick={() => {
            router.push('/notes?id=' + note) 
            setIsEditable(false)}} key={index} className="note-item">
              <div className="note-content">
                <p>{noteText}</p>
                <small>{date.split(' ').slice(1,4).join(' ')}</small>
              </div>
              <div onClick={(e)=>{
                e.stopPropagation();
                deleteNote(note);
              }} className="delete-button">
                <i className="fa-solid fa-trash"></i>
              </div>
            </button>
          )})
        )}
      </div>
      <button onClick={logOut} className="btn btn-secondary">Log out</button>
    </section>
  );
};

export default SideNav;

import { useAuth } from "@/context/AuthContext";

const SideNav = (props) => {
  const { noteIds, setNoteIds, handleCreateNote } = props;
  const {logOut} = useAuth();

  return (
    <section>
      <h1>NOTES</h1>
      <button onClick={handleCreateNote}>Add Note</button>
      <div>
        {noteIds.length === 0 ? (
          <div>
            <span>No Note Available</span>
          </div>
        ) : (
          noteIds.map((note, index) => (
            <div key={index} className="note-item">
              <i className="fa-solid fa-file"></i>
              <span>{note}</span>
              <button className="delete-button">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))
        )}
      </div>
      <button onClick={logOut}>Log out</button>
    </section>
  );
};

export default SideNav;

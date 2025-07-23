const SideNav = (props) => {
  const notes = [
    "lorem ipsum",
    "dolor sit amet",
    "consectetur adipiscing elit",
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  ];

  return (
    <section>
      <h1>NOTES</h1>
      <button>Add Note</button>
      <div>
        {notes.length === 0 ? (
          <div>
            <span>No Note Available</span>
          </div>
        ) : (
          notes.map((note, index) => (
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
      <button>Log out</button>
    </section>
  );
};

export default SideNav;

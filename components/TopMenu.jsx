const TopMenu = (props) => {
    const { isEditable, toggleEditable, savingNote, handleSaveNote } = props;

  return (
    <nav>
      <div>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div>
        <button onClick={handleSaveNote} disabled={savingNote}>Save</button>
        {
            isEditable ?
            (<button onClick={toggleEditable}>View</button>)
            :
            (<button onClick={toggleEditable}>Edit</button>)
        }
      </div>
    </nav>
  );
};

export default TopMenu;

const TopMenu = (props) => {
    const { isEditable, toggleEditable, savingNote, handleSaveNote, setShowSideNav } = props;

  return (
    <nav className="top-menu">
      <div onClick={() => setShowSideNav((prev) => !prev)} className="menu-icon">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div>
        <button className="btn btn-secondary" onClick={handleSaveNote} disabled={savingNote}>Save</button>
        {
            isEditable ?
            (<button className="btn btn-primary" onClick={toggleEditable}>View</button>)
            :
            (<button className="btn btn-primary" onClick={toggleEditable}>Edit</button>)
        }
      </div>
    </nav>
  );
};

export default TopMenu;

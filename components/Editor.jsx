
const Editor = (props) => {
  const { text, setText } = props;
  return (
    <section className="editor-container" >
        <textarea className="editor" value={text} onChange={setText}></textarea>
    </section>
  )
}

export default Editor

const Editor = (props) => {
  const { text, setText } = props;
  return (
    <section>
        <textarea value={text} onChange={setText}></textarea>
    </section>
  )
}

export default Editor
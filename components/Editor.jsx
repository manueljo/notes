
const Editor = (props) => {
  const { text, setText } = props;
  return (
    <section>
        <textarea value={text} onChange={(e) => {setText(e.target.value)}}></textarea>
    </section>
  )
}

export default Editor
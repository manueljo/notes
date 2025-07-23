import Markdown from "markdown-to-jsx"

const MDX = (props) => {
  const {text} = props;
  return (
    <article>
      <Markdown>
        {text.trim() }
      </Markdown>
    </article>
  )
}

export default MDX
import Markdown from "markdown-to-jsx"

const MDX = (props) => {
  const {text} = props;
  return (
    <article>
      <Markdown>
        {text.trim() || "Create content to view it here."}
      </Markdown>
    </article>
  )
}

export default MDX
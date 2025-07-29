import Markdown from "markdown-to-jsx";

const MDX = (props) => {
  const { text } = props;
  return (
    <article className="mdx-container">
      <div>
        <Markdown>{text.trim() || "Create content to view it here."}</Markdown>
      </div>
    </article>
  );
};

export default MDX;

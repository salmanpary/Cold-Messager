import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-3xl pt-6 text-[#ff40a5]">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl pt-6 text-[#ff40a5]">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl pt-6 text-[#ff40a5]">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-lg pt-2">{children}</p>
    ),
    [INLINES.HYPERLINK]: ({data}, children) => (
     <a href={data.uri} className="text-[#ffcc4b] font-bold">
			{children}					
	 </a>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
  },
};

const RichText = ({ content }) => {
  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;

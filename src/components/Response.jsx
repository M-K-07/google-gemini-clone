import { useContext, useEffect, useState, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AIContext } from "../context/Context";
import gemini_icon from "../assets/gemini-icon.png";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'


const Response = () => {
  const { displayInput, result, loading } = useContext(AIContext);
  const [htmlContent, setHtmlContent] = useState("");
  const bottomRef = useRef(null); 

  useEffect(() => {
    const processMarkdown = async () => {
      try {
        const file = await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypeDocument, { title: '👋🌍' })
          .use(rehypeFormat)
          .use(rehypeStringify)
          .use(rehypePrettyCode, {
            theme: "github-dark-default",
            transformers: [
              transformerCopyButton({
                visibility: 'always',
                feedbackDuration: 3000,
              }),
            ],
          })
          .process(result);

        setHtmlContent(file.toString());
      } catch (error) {
        console.error("Error processing Markdown:", error);
        setHtmlContent("<p>Error processing content.</p>");
      }
    };

    if (result) {
      processMarkdown();
    }
  }, [result]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [htmlContent]);

  return (
    <div className="display-res lg:max-h-[80vh] max-h-[77vh] overflow-y-scroll">
      <div className="user-inp flex lg:mx-36 mx-4 lg:mt-16 mt-8 items-start justify-start gap-3 lg:gap-5">
        <FaUserCircle className="w-8 h-8  text-3xl lg:text-2xl" />
        <p className="text-white bg-zinc-800 p-4 lg:rounded-2xl rounded-2xl w-[400px] lg:w-fit md:w-fit text-[13px] whitespace-pre-wrap lg:text-[15px]">
          {displayInput}
        </p>
      </div>
      
      <div className="res flex lg:mx-36 mx-4 justify-start lg:mt-10 mt-6 items-start gap-3 lg:gap-5 relative">
        <div className="w-8 lg:w-9 h-8 lg:h-9 overflow-hidden flex-shrink-0">
          <img
            src={gemini_icon}
            alt="gemini-icon"
            className={`${loading && "gemini-icon"} w-full h-full`}
          />
        </div>
        {!loading && (
          <div
            className="prose prose-invert text-zinc-400 max-w-[70vw] lg:w-[65vw] text-sm lg:text-lg whitespace-no-wrap"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        )}
      </div>
      
      <div ref={bottomRef} />
    </div>
  );
};

export default Response;

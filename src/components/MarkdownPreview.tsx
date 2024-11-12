import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

interface MarkdownPreviewProps {
  content: string;
}

export function MarkdownPreview({ content }: MarkdownPreviewProps) {
  return (
    <div className="w-full h-full overflow-auto px-8 py-6">
      <div className="prose prose-slate prose-img:rounded-xl prose-headings:font-semibold prose-a:text-blue-600">
        <ReactMarkdown 
          rehypePlugins={[rehypeHighlight]}
          components={{
            img: ({ node, ...props }) => (
              <img className="w-full max-w-2xl mx-auto shadow-lg" {...props} />
            ),
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto">
                <table className="mt-6" {...props} />
              </div>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
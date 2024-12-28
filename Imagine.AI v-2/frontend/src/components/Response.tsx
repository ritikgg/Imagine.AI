import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';
import { Button } from './ui/Button';

interface ResponseProps {
  content: string;
  isStreaming: boolean;
}

export const Response: React.FC<ResponseProps> = ({ content, isStreaming }) => {
  return (
    <div className="h-full flex flex-col bg-slate-800 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <h2 className="text-white font-medium">Response</h2>
        <Button
          variant="ghost"
          className="text-slate-400 hover:text-white"
          onClick={() => navigator.clipboard.writeText(content)}
        >
          <Copy size={18} />
        </Button>
      </div>
      <div className="flex-1 overflow-auto p-4 text-white">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
        {isStreaming && (
          <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse ml-1" />
        )}
      </div>
    </div>
  );
};
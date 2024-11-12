import React from 'react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  return (
    <div className="w-full h-full relative bg-gray-50">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full p-8 focus:outline-none resize-none font-mono bg-transparent"
        placeholder="Type your markdown here..."
        spellCheck="false"
      />
    </div>
  );
}
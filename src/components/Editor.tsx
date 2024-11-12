import React from 'react';
import { Toolbar } from './Toolbar';
import { MarkdownEditor } from './MarkdownEditor';
import { MarkdownPreview } from './MarkdownPreview';

const DEFAULT_MARKDOWN = `# Welcome to the Markdown Editor

## Features
- Live preview
- Syntax highlighting
- File upload/download
- Beautiful typography

### Code Example
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Table Example
| Feature | Status |
|---------|--------|
| Preview | ✅ |
| Upload | ✅ |
| Download | ✅ |

### Image Example
![Nature](https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80)
`;

export function Editor() {
  const [markdown, setMarkdown] = React.useState<string>(DEFAULT_MARKDOWN);
  const [isPreview, setIsPreview] = React.useState(false);

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (content) setMarkdown(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          <Toolbar
            isPreview={isPreview}
            setIsPreview={setIsPreview}
            onDownload={handleDownload}
            onUpload={handleUpload}
          />
          <div className="h-[calc(100vh-12rem)] bg-white">
            {!isPreview ? (
              <MarkdownEditor value={markdown} onChange={setMarkdown} />
            ) : (
              <MarkdownPreview content={markdown} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
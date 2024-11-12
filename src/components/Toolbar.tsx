import React from 'react';
import { FileEdit, Eye, Download, Upload } from 'lucide-react';

interface ToolbarProps {
  isPreview: boolean;
  setIsPreview: (value: boolean) => void;
  onDownload: () => void;
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Toolbar({ isPreview, setIsPreview, onDownload, onUpload }: ToolbarProps) {
  return (
    <div className="border-b border-gray-100 p-4 flex items-center justify-between bg-white">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setIsPreview(false)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
            !isPreview 
              ? 'bg-blue-600 text-white shadow-md shadow-blue-100' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <FileEdit size={18} />
          <span>Edit</span>
        </button>
        <button
          onClick={() => setIsPreview(true)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
            isPreview 
              ? 'bg-blue-600 text-white shadow-md shadow-blue-100' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Eye size={18} />
          <span>Preview</span>
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onDownload}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <Download size={18} />
          <span>Download</span>
        </button>
        <label className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
          <Upload size={18} />
          <span>Upload</span>
          <input
            type="file"
            accept=".md,.markdown"
            onChange={onUpload}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
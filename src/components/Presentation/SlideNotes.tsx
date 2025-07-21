import React from 'react';
import { FileText } from 'lucide-react';

interface SlideNotesProps {
  notes: string;
  slideTitle: string;
}

const SlideNotes: React.FC<SlideNotesProps> = ({ notes, slideTitle }) => {
  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-2 mb-3">
        <FileText className="h-4 w-4 text-electric-600 dark:text-electric-400" />
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          Notes du formateur
        </h3>
      </div>
      
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
        <h4 className="text-xs font-medium text-yellow-800 dark:text-yellow-200 mb-2">
          {slideTitle}
        </h4>
        <p className="text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed whitespace-pre-line">
          {notes}
        </p>
      </div>
    </div>
  );
};

export default SlideNotes;
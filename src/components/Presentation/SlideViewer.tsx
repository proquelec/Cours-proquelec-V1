import React from 'react';
import { Slide } from '../../types';

interface SlideViewerProps {
  slide: Slide;
  isFullscreen: boolean;
}

const SlideViewer: React.FC<SlideViewerProps> = ({ slide, isFullscreen }) => {
  const renderContent = () => {
    switch (slide.type) {
      case 'text':
        return (
          <div className="space-y-6">
            <div className={`${isFullscreen ? 'text-6xl' : 'text-3xl'} font-bold text-gray-900 dark:text-white mb-8`}>
              {slide.title}
            </div>
            <div className={`${isFullscreen ? 'text-3xl leading-relaxed' : 'text-xl leading-relaxed'} text-gray-700 dark:text-gray-300 whitespace-pre-line`}>
              {slide.content}
            </div>
          </div>
        );
      case 'image':
        return (
          <div className="space-y-6">
            <div className={`${isFullscreen ? 'text-6xl' : 'text-3xl'} font-bold text-gray-900 dark:text-white mb-8`}>
              {slide.title}
            </div>
            {slide.media && (
              <img
                src={slide.media}
                alt={slide.title}
                className="max-w-full max-h-96 mx-auto rounded-lg shadow-lg"
              />
            )}
            {slide.content && (
              <div className={`${isFullscreen ? 'text-2xl' : 'text-lg'} text-gray-700 dark:text-gray-300 whitespace-pre-line`}>
                {slide.content}
              </div>
            )}
          </div>
        );
      case 'video':
        return (
          <div className="space-y-6">
            <div className={`${isFullscreen ? 'text-6xl' : 'text-3xl'} font-bold text-gray-900 dark:text-white mb-8`}>
              {slide.title}
            </div>
            {slide.media && (
              <video
                src={slide.media}
                controls
                className="max-w-full max-h-96 mx-auto rounded-lg shadow-lg"
              />
            )}
            {slide.content && (
              <div className={`${isFullscreen ? 'text-2xl' : 'text-lg'} text-gray-700 dark:text-gray-300 whitespace-pre-line`}>
                {slide.content}
              </div>
            )}
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <div className={`${isFullscreen ? 'text-6xl' : 'text-3xl'} font-bold text-gray-900 dark:text-white mb-8`}>
              {slide.title}
            </div>
            <div className={`${isFullscreen ? 'text-3xl leading-relaxed' : 'text-xl leading-relaxed'} text-gray-700 dark:text-gray-300 whitespace-pre-line`}>
              {slide.content}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`${
      isFullscreen 
        ? 'h-screen w-screen p-16 flex items-center justify-center bg-white dark:bg-gray-900' 
        : 'h-full w-full p-8 flex items-center justify-center'
    }`}>
      <div className={`${isFullscreen ? 'max-w-6xl' : 'max-w-4xl'} w-full text-center`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default SlideViewer;
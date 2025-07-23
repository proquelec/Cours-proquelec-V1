import React from 'react';
import { Slide } from '../../types';

interface SlideViewerProps {
  slide: Slide;
  isFullscreen: boolean;
  annotations?: {x: number, y: number, text: string}[];
  onAnnotationAdd?: (x: number, y: number, text: string) => void;
  isDrawingMode?: boolean;
}

const SlideViewer: React.FC<SlideViewerProps> = ({ 
  slide, 
  isFullscreen, 
  annotations = [],
  onAnnotationAdd,
  isDrawingMode = false 
}) => {
  const renderContent = () => {
    switch (slide.type) {
      case 'text':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center text-center px-8">
            <h1 className={`${
              isFullscreen 
                ? 'text-5xl md:text-6xl lg:text-7xl mb-12' 
                : 'text-2xl md:text-3xl mb-6'
            } font-bold text-gray-900 dark:text-white leading-tight`}>
              {slide.title}
            </h1>
            <div className={`${
              isFullscreen 
                ? 'text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-6xl' 
                : 'text-lg md:text-xl leading-relaxed max-w-4xl'
            } text-gray-700 dark:text-gray-300 whitespace-pre-line`}>
              {slide.content}
            </div>
          </div>
        );
      case 'image':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center text-center px-8">
            <h1 className={`${
              isFullscreen 
                ? 'text-5xl md:text-6xl lg:text-7xl mb-8' 
                : 'text-2xl md:text-3xl mb-6'
            } font-bold text-gray-900 dark:text-white leading-tight`}>
              {slide.title}
            </h1>
            {slide.media && (
              <div className={`${isFullscreen ? 'mb-8' : 'mb-6'} flex justify-center`}>
                <img
                  src={slide.media}
                  alt={slide.title}
                  className={`${
                    isFullscreen 
                      ? 'max-h-96 lg:max-h-[500px]' 
                      : 'max-h-64 md:max-h-80'
                  } max-w-full object-contain rounded-lg shadow-lg`}
                />
              </div>
            )}
            {slide.content && (
              <div className={`${
                isFullscreen 
                  ? 'text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-5xl' 
                  : 'text-base md:text-lg leading-relaxed max-w-3xl'
              } text-gray-700 dark:text-gray-300 whitespace-pre-line`}>
                {slide.content}
              </div>
            )}
          </div>
        );
      case 'video':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center text-center px-8">
            <h1 className={`${
              isFullscreen 
                ? 'text-5xl md:text-6xl lg:text-7xl mb-8' 
                : 'text-2xl md:text-3xl mb-6'
            } font-bold text-gray-900 dark:text-white leading-tight`}>
              {slide.title}
            </h1>
            {slide.media && (
              <div className={`${isFullscreen ? 'mb-8' : 'mb-6'} flex justify-center`}>
                <video
                  src={slide.media}
                  controls
                  className={`${
                    isFullscreen 
                      ? 'max-h-96 lg:max-h-[500px]' 
                      : 'max-h-64 md:max-h-80'
                  } max-w-full rounded-lg shadow-lg`}
                />
              </div>
            )}
            {slide.content && (
              <div className={`${
                isFullscreen 
                  ? 'text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-5xl' 
                  : 'text-base md:text-lg leading-relaxed max-w-3xl'
              } text-gray-700 dark:text-gray-300 whitespace-pre-line`}>
                {slide.content}
              </div>
            )}
          </div>
        );
      default:
        return (
          <div className="w-full h-full flex flex-col justify-center items-center text-center px-8">
            <h1 className={`${
              isFullscreen 
                ? 'text-5xl md:text-6xl lg:text-7xl mb-12' 
                : 'text-2xl md:text-3xl mb-6'
            } font-bold text-gray-900 dark:text-white leading-tight`}>
              {slide.title}
            </h1>
            <div className={`${
              isFullscreen 
                ? 'text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-6xl' 
                : 'text-lg md:text-xl leading-relaxed max-w-4xl'
            } text-gray-700 dark:text-gray-300 whitespace-pre-line`}>
              {slide.content}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`${
      isFullscreen 
        ? 'h-screen w-screen bg-white dark:bg-gray-900 overflow-hidden' 
        : 'h-full w-full bg-white dark:bg-gray-100 overflow-auto'
    } relative`}>
      {/* Contenu principal */}
      <div className="w-full h-full relative">
        {renderContent()}
        
        {/* Annotations */}
        {annotations.map((annotation, index) => (
          <div
            key={index}
            className="absolute bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded text-xs pointer-events-none z-10"
            style={{
              left: `${annotation.x}%`,
              top: `${annotation.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {annotation.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideViewer;
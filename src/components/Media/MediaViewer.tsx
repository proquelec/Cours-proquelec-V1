import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';

interface MediaViewerProps {
  type: 'image' | 'video' | 'pdf';
  src: string;
  title: string;
  isFullscreen?: boolean;
  autoPlay?: boolean;
}

const MediaViewer: React.FC<MediaViewerProps> = ({ 
  type, 
  src, 
  title, 
  isFullscreen = false,
  autoPlay = false 
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (type === 'video' && videoRef.current) {
      const video = videoRef.current;
      
      const updateTime = () => setCurrentTime(video.currentTime);
      const updateDuration = () => setDuration(video.duration);
      const handleLoadStart = () => setIsLoading(true);
      const handleCanPlay = () => setIsLoading(false);
      
      video.addEventListener('timeupdate', updateTime);
      video.addEventListener('loadedmetadata', updateDuration);
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('canplay', handleCanPlay);
      
      return () => {
        video.removeEventListener('timeupdate', updateTime);
        video.removeEventListener('loadedmetadata', updateDuration);
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [type]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const time = parseFloat(e.target.value);
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);
  const resetTransform = () => {
    setZoom(1);
    setRotation(0);
  };

  const renderImage = () => (
    <div className="relative h-full flex items-center justify-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-600"></div>
        </div>
      )}
      
      <motion.img
        ref={imageRef}
        src={src}
        alt={title}
        className="max-w-full max-h-full object-contain"
        style={{
          transform: `scale(${zoom}) rotate(${rotation}deg)`,
          transition: 'transform 0.3s ease'
        }}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Contrôles d'image */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
        <button
          onClick={handleZoomOut}
          className="p-2 text-white hover:bg-white/20 rounded transition-colors"
          title="Zoom arrière"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        
        <span className="text-white text-sm font-mono px-2">
          {Math.round(zoom * 100)}%
        </span>
        
        <button
          onClick={handleZoomIn}
          className="p-2 text-white hover:bg-white/20 rounded transition-colors"
          title="Zoom avant"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
        
        <div className="w-px h-6 bg-white/30 mx-2" />
        
        <button
          onClick={handleRotate}
          className="p-2 text-white hover:bg-white/20 rounded transition-colors"
          title="Rotation"
        >
          <RotateCw className="h-4 w-4" />
        </button>
        
        <button
          onClick={resetTransform}
          className="p-2 text-white hover:bg-white/20 rounded transition-colors text-xs"
          title="Réinitialiser"
        >
          Reset
        </button>
      </div>
    </div>
  );

  const renderVideo = () => (
    <div className="relative h-full flex flex-col">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-600"></div>
        </div>
      )}
      
      <div className="flex-1 flex items-center justify-center">
        <video
          ref={videoRef}
          src={src}
          className="max-w-full max-h-full"
          onClick={togglePlayPause}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>

      {/* Contrôles vidéo */}
      <div className="bg-black/80 backdrop-blur-sm p-4 space-y-2">
        {/* Barre de progression */}
        <div className="flex items-center space-x-2">
          <span className="text-white text-sm font-mono">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-white text-sm font-mono">
            {formatTime(duration)}
          </span>
        </div>

        {/* Boutons de contrôle */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={togglePlayPause}
            className="p-3 bg-electric-600 hover:bg-electric-700 text-white rounded-full transition-colors"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
          
          <button
            onClick={toggleMute}
            className="p-2 text-white hover:bg-white/20 rounded transition-colors"
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  );

  const renderPDF = () => (
    <div className="h-full flex items-center justify-center">
      <iframe
        src={src}
        className="w-full h-full border-0"
        title={title}
      />
    </div>
  );

  return (
    <div className={`${
      isFullscreen 
        ? 'h-screen w-screen bg-black' 
        : 'h-full w-full bg-gray-100 dark:bg-gray-800'
    } relative`}>
      {type === 'image' && renderImage()}
      {type === 'video' && renderVideo()}
      {type === 'pdf' && renderPDF()}
    </div>
  );
};

export default MediaViewer;
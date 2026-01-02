import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const AutoPlayVideo = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            setIsPlaying(true);  // joue uniquement quand 100% visible
          } else {
            setIsPlaying(false); // stop sinon
          }
        });
      },
      { threshold: [0, 1] }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div ref={videoRef} className="w-full rounded-lg overflow-hidden">
      <ReactPlayer
        src={src}
        width="100%"
        height="360px"
        playing={isPlaying}
        controls
      />
    </div>
  );
};

export default AutoPlayVideo;

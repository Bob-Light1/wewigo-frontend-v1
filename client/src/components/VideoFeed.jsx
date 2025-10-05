import { useState } from "react";
import AutoPlayVideo from "./AutoPlayVideo";

const VideoFeed = ({ posts = [] }) => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    return (
      <div className="grid grid-cols-2 gap-2">
        {posts
          .filter((post) => post.post_type === "video")
          .flatMap((post, i) =>
            post.image_urls.map((vid, j) => (
              <AutoPlayVideo
                key={`${i}-${j}`}
                src={vid}
                index={`${i}-${j}`} // identifiant unique
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))
          )}
      </div>
    );
  };
  
  export default VideoFeed;
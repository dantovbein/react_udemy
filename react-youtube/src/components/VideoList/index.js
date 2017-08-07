import React from 'react';

import VideoListItem from '../VideoListItem';

const VideoList = (props) => {

  let items = props.videos.map((video) => {
    return <VideoListItem
      onVideoSelect = { props.onVideoSelect }
      video={ video } key={ video.etag } />;
  })

  return (
    <ul className="video-List col-md-4">
      { items }
    </ul>
  );
};

export default VideoList;

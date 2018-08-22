import React from "react";

/* Method 01 */
// const VideoItem = (props) => {
// 	const imageUrl = props.video.snippet.thumbnails.default.url;
// 	const videoTitle = props.video.snippet.title;

/* Method 02 */
const VideoItem = ({ video, onVideoSelect }) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list-media">
				<div className="media-left">
					<img
						className="media-object"
						src={imageUrl}
						alt="media object"
					/>
				</div>
			</div>
			<div className="media-body">
				<div className="media-heading">{videoTitle}</div>
			</div>
		</li>
	);
};

export default VideoItem;

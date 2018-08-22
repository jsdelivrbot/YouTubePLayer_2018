import lodash from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/item_detail";

const API_KEY = "AIzaSyDuuXGZUGKoxAZRoS3UT4CNE6eEZdAieaE";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.searchVideo("surfboards");
	}

	searchVideo(searchTerm) {
		YTSearch({ key: API_KEY, term: searchTerm }, responseData => {
			this.setState({
				videos: responseData,
				selectedVideo: responseData[0]
			});
		});
	}

	render() {
		const searchWithLodash = lodash.debounce(newTerm => {
			this.searchVideo(newTerm);
		}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={searchWithLodash} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					videos={this.state.videos}
					onVideoSelect={selectedVideo =>
						this.setState({ selectedVideo })
					}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector(".container"));

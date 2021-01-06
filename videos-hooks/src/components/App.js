import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideo";

////////////////////////////////////
// this is the code with hooks Refactor 3
//moving peices to hooks/useVideo.js
///////////////////////////////////
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("tina");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ////////////////////////////////////
// // this is the code with hooks Refactor 2
// ///////////////////////////////////
// const App = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     onTermSubmit("buildings");
//   }, []);

//   const onTermSubmit = async (term) => {
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });

//     setVideos(response.data.items);
//     setSelectedVideo(response.data.items[0]);
//   };
//   //moved inline
//   // const onVideoSelect = (video) => {
//   //   setSelectedVideo(video);
//   // };

//   return (
//     <div className="ui container">
//       <SearchBar onFormSubmit={onTermSubmit} />
//       <div className="ui grid">
//         <div className="ui row">
//           <div className="eleven wide column">
//             <VideoDetail video={selectedVideo} />
//           </div>
//           <div className="five wide column">
//             <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ////////////////////////////////////
// // this is the code with hooks Refactor 1
// ///////////////////////////////////
// const App = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     onTermSubmit("buildings");
//   }, []);

//   const onTermSubmit = async (term) => {
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });

//     setVideos(response.data.items);
//     setSelectedVideo(response.data.items[0]);
//   };
//   const onVideoSelect = (video) => {
//     setSelectedVideo(video);
//   };

//   return (
//     <div className="ui container">
//       <SearchBar onFormSubmit={onTermSubmit} />
//       <div className="ui grid">
//         <div className="ui row">
//           <div className="eleven wide column">
//             <VideoDetail video={selectedVideo} />
//           </div>
//           <div className="five wide column">
//             <VideoList
//               onVideoSelect={onVideoSelect}
//               videos={videos}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

////////////////////////////////////
// this is the code without hooks
///////////////////////////////////
// class App extends React.Component {
// replaced on line 10 and 11
// state = { videos: [], selectedVideo: null };

// replaced with use effect hook
// componentDidMount() {
//   this.onTermSubmit('buildings')
// }

// onTermSubmit = async (term) => {
//   const response = await youtube.get("/search", {
//     params: {
//       q: term,
//     },
//   });

//   this.setState({
//     videos: response.data.items,
//     selectedVideo: response.data.items[0],
//   });
// };

// onVideoSelect = (video) => {
//   console.log(video);
//   this.setState({ selectedVideo: video });
// };

// render() {
//   return (
//     <div className="ui container">
//       <SearchBar onFormSubmit={this.onTermSubmit} />
//       <div className="ui grid">
//         <div className="ui row">
//           <div className="eleven wide column">
//             <VideoDetail video={this.state.selectedVideo} />
//           </div>
//           <div className="five wide column">
//             <VideoList
//               onVideoSelect={this.onVideoSelect}
//               videos={this.state.videos}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// }

export default App;

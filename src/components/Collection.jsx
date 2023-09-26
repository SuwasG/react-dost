// import React, { useState } from 'react'
// import Video from './Video'

// import videosCollector from '../data/data'
// import PlayButton from './PlayButton'
// import Counter from './Counter'
// import AddVideo from './AddVideo'

// const Collection = () => {
//   const [videos, setVideos]=useState(videosCollector)

//   const addVideos=(video)=>{
//       setVideos([
//         ...videos,
//           {...video, id:videos.length+1}

//       ])
//   }

//   return (
//     <>
//     {/* <AddVideo addVideos={addVideos} /> */}
//     <AddVideo addVideos={addVideos}></AddVideo>

//   {
//     videos.map(videoIterator=>
//       <Video
//       key={videoIterator.id}
//       title={videoIterator.title}
//       time={videoIterator.time}
//       views={videoIterator.views}
//       channel={videoIterator.channel}
//       verified={videoIterator.verified}
//       id={videoIterator.id}>
//           <PlayButton   onPlay={()=>console.log('Playing...', videoIterator.title)} onPause={()=>console.log('Paused')}>{videoIterator.title}</PlayButton>
//       </Video>
//       )
//   }

//   <div style={{clear:'both'}}>
//     {/* <PlayButton  message="Hello I am PLAY" onPlay={()=>console.log('Played')} onPause={()=>console.log('Paused')}>Play</PlayButton> */}
//     {/* <PlayButton message="I am PAUSE"  onClick={()=>alert('This is alert.')}> Pause</PlayButton> */}
//   </div>

//   <Counter/>

//     </>
//   )
// }

// export default Collection

import React, { useContext, useReducer, useState } from "react";
import Video from "./Video";
import videosCollector from "../data/data";
import PlayButton from "./PlayButton";
import Counter from "./Counter";
import AddVideo from "./AddVideo";
import VideoList from "./VideoList";
import ThemeContext from "../context/ThemeContext";
import "./collection.css";
import VideosContext from "../context/VideoContext";
import VideoDispatchContext from "../context/VideoDispatchContext";

const Collection = () => {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("darkMode");

  // const url="https://my.api.mockaroo.com/movies.json?key=4ef28530"

  const videoReducer = (videos, action) => {
    //reducer eauta yasto function ho jasko return state hunxa.
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((v) => v.id !== action.payload);
      // case 'EDIT':
      //   return videos.find(v=>v.id===action.payload)
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  };
  const [videos, dispatch] = useReducer(videoReducer, []); // videos lai directly manipulate nagari flexibility dinxa.
  // const [videos, setVideos] = useState(videosCollector); // video lai matra directly manipulate garxa.

  const themeContext = useContext(ThemeContext);
  console.log({ themeContext });
  // const addVideos = (video) => {
  //   dispatch({ type: "ADD", payload: video });
  //   // action: {simple object which is written as type:'ADD' , payload: video}
  //   // setVideos([
  //   //   ...videos,
  //   //   { ...video, id: videos.length + 1 }
  //   // ]);
  // };

  // const deleteVideo = (id) => {
  //   dispatch({ type: "DELETE", payload: id });
  //   // setVideos(
  //   //   videos.filter(video=>video.id!==id)  // video bata aauney id ra hamile funcn maa pass gareko id milena vane.
  //   // )
  // };
  const editVideo = (id) => {
    dispatch({ type: "EDIT", payload: id });
    setEditableVideo(videos.find((video) => video.id === id));
  };

  // const updateVideo = (video) => {
  //   dispatch({type:'UPDATE', payload:video})
  //   // const index = videos.findIndex((v) => v.id === video.id);
  //   // const newVideos = [...videos];
  //   // newVideos.splice(index, 1, video);
  //   // console.log(newVideos);
  // };

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <button
            onClick={() =>
              setMode(mode === "darkMode" ? "lightMode" : "darkMode")
            }
          >
            {" "}
            Theme
          </button>
          <div
            className={`Collection ${mode}`}
            onClick={() => console.log("Collection-App")}
          >
            <AddVideo
              // dispatch={dispatch}
              // addVideos={addVideos}
              // updateVideo={updateVideo}
              editableVideo={editableVideo}
            />
            <VideoList
              // videos={videos}
              // deleteVideo={deleteVideo}
              editVideo={editVideo}
              // dispatch={dispatch}
            />

            <div style={{ clear: "both" }}>
              {/* Additional components */}
              <Counter />
            </div>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Collection;

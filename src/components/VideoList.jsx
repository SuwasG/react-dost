import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import PlayButton from './PlayButton'
import Video from './Video'
import VideosContext from '../context/VideoContext'
import useVideoDispatch from '../hooks/VideoDispatch'

const VideoList = ({  editVideo}) => {
    const url="https://my.api.mockaroo.com/movies.json?key=4ef28530"
    const videos=useContext(VideosContext)
    const dispatch=useVideoDispatch()
    // const [videos, setVideos]=useState([])

//    const handleClick=async ()=>{
//     const res=await axios.get(url)
//     console.log('Get videos', res)
//     setVideos(res.data)
//    }

// const handleClick = async () => {
//     try {
//       const res = await axios.get(url);
//       console.log('Get videos', res);
  
//       // Assuming the API response is an array of video objects
//       setVideos(res.data || []);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//       setVideos([]); // Handle the error by setting an empty array or showing an error message
//     }
//   };

const handleClick = async () => {
    try {
      const res = await axios.get(url);
      console.log('Get videos', res);

      // Assuming the API response is an array of video objects
      if (res.data && Array.isArray(res.data)){
        // setVideos(res.data || [])
        dispatch({type:'LOAD',payload:res.data})
      }
    //   setVideos(res.data.data || []);
    else {
        // Handle the case where the response is not as expected
        console.error('Invalid API response format:', res);
        // setVideos([]);
      }
    } catch (error) {
      console.log('Error fetching videos:', error);

      // Handle the error by setting videos to an empty array
      // setVideos([]);

    }
  };

  useEffect( ()=>{
    // const res=await axios.get(url)
    // setVideos(res.data)
    // handleClick();
    const getVideos=async()=>{
      const res=await axios.get(url)
      dispatch({type:"LOAD", payload:res.data})
    }
    getVideos();
  },[handleClick])

    return (

        <>
            {
                videos.map((videoIterator) => (
                    <Video
                        key={videoIterator.id}
                        title={videoIterator.title}
                        time={videoIterator.time}
                        views={videoIterator.views}
                        channel={videoIterator.channel}
                        verified={videoIterator.verified}
                        id={videoIterator.id}
                        // deleteVideo={deleteVideo}
                        // dispatch={dispatch}
                        editVideo={editVideo}
                    >
                        <PlayButton
                            onPlay={() => console.log('Playing...', videoIterator.title)}
                            onPause={() => console.log('Paused')}
                        >
                            {videoIterator.title}
                        </PlayButton>
                    </Video>
                ))
            }
            <button onClick={handleClick}>Get Videos</button>

        </>
    )
}

export default VideoList
import React, { useContext, useEffect, useRef, useState } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";
// import VideoDispatchContext from '../context/VideoDispatchContext';

const initialState = {
  time: "",
  channel: "",
  verified: "",
  title: "",
  views: "",
};

const AddVideo = ({ editableVideo }) => {
  const [video, setVideo] = useState(initialState);
  // const dispatch=useContext(VideoDispatchContext)
  const dispatch = useVideoDispatch();

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableVideo) {
      // updateVideo(video)
      dispatch({ type: "UPDATE", payload: video });
    } else {
      // Ensure that both title and views are provided before adding the video
      if (video.title && video.views && video.time && video.channel) {
        // addVideos(video);
        dispatch({ type: "ADD", payload: video });
        // Clear the form after adding the video
      } else {
        alert("Please provide a title and views for the video.");
      }
    }
    setVideo(initialState);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckBoxChange = (e) => {
    e.preventDefault();
    setVideo({
      ...video,
      [e.target.name]: e.target.checked,
    });
  };

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
    // inputRef.current.value = "DEMO";
    // inputRef.current.focus();
    inputRef.current.placeholder = "";
    "type here".split('').forEach((char,index) => {
      setTimeout(() => {
        inputRef.current.placeholder = inputRef.current.placeholder + char;
      }, 100*index);
    });
  }, [editableVideo]);

  return (
    <>
      <form>
        <input
          ref={inputRef}
          type="text"
          placeholder="video-title"
          name="title"
          onChange={handleChange}
          value={video.title}
        />

        <input
          ref={inputRef}
          type="text"
          placeholder="views"
          name="views"
          onChange={handleChange}
          value={video.views}
        />

        <input
          ref={inputRef}
          type="number"
          placeholder="time"
          name="time"
          onChange={handleChange}
          value={video.time}
        />

        <input
          type="text"
          placeholder="channelName"
          name="channel"
          onChange={handleChange}
          value={video.channel}
        />

        <label htmlFor="verified">Verification</label>
        <input
          type="checkbox"
          name="verified"
          onChange={handleCheckBoxChange}
          checked={video.verified}
        />

        <button onClick={handleSubmit}>
          {editableVideo ? (
            <span className="edithead">Edit</span>
          ) : (
            <span className="addhead">Add</span>
          )}{" "}
          video
        </button>
      </form>
    </>
  );
};

export default AddVideo;

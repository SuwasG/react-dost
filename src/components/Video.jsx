import React, { useContext, useEffect } from "react";
import "./video.css";
import ThemeContext from "../context/ThemeContext";
import VideoDispatchContext from "../context/VideoDispatchContext";
const Video = ({
  id,
  title,
  channel = "SamratYouTube",
  views,
  time,
  verified,
  children,
  // dispatch,
  editVideo,
}) => {
  const theme = useContext(ThemeContext);
  const dispatch=useContext(VideoDispatchContext)

  // rendering first time: mounting, 
  // useEffect jahile pani rendering paxi matrai chalxa.
  
  // useEffect(()=>{
    
  //  const idx= setInterval(()=>{
  //     console.log('Video Playing', id)
  //   },3000)

  //   // cleanup funcn
  //   return ()=>{
  //     clearInterval(idx)
  //   }
  

  // },[id]) // dependency react le decide garxa, yadi id change vayema re-render hunxa.
  
  // let verified=false;
  // let channelJSX;
  // if (verified){
  //  channelJSX= <div className='channel'>{channel}✅</div>
  // }
  // else{
  //  channelJSX= <div className='channel'>{channel}</div>
  // }

  const bg = "dark";
  // bgColor="purple"
  return (
    <>
      <div>
        <div className={`container ${theme}`}>
          <button
            className="close"
            onClick={() => dispatch({ type: "DELETE", payload: id })}
          >
            X
          </button>
          <button className="update" onClick={() => editVideo(id)}>
            +
          </button>

          <div className="pic">
            <img src={`https://picsum.photos/id/${id}/160/90`} alt={title} />
          </div>
          <div className="title">{title}</div>
          {/* {channelJSX} */}
          {/* {
    verified? <div className='channel'>{channel}✅</div>: <div className='channel'>{channel}</div>
  } */}
          {/* verified==true narakhne. */}
          <div className="channel">
            {channel} {verified ? "✅" : null}{" "}
          </div>
          {/* short-circuit */}
          {/* <div className="channel">{channel} {verified && '✅'}</div> */}
          <div className="views">
            {views} Views <span>.</span> {time} minutes ago.
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};
export default Video;

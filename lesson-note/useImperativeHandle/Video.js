import { forwardRef, useImperativeHandle, useRef } from 'react'
import video_1 from './video/video_1.mp4'

function Video(props,ref){
    const videoRef = useRef()
    useImperativeHandle(ref,() => ({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))

    return(
        <video 
            ref={videoRef}
            src={video_1}
            width={200}            
        />
    )
}
export default forwardRef(Video)
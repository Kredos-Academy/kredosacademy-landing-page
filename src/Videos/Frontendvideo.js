import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import myvideo from './Secret Society(2021)_part one 2.mp4'
import frontendImage from '../Images/IMG_9675.JPG'

function Frontendvideo() {
  return (
    <Video autoplay loop /* poster={frontendImage} */>
        <source src={myvideo} type=''/>
    </Video>
  )
}

export default Frontendvideo
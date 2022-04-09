import React, { useContext } from 'react'
import { SongContext } from '../store/SongContext'


export const SongSelected = () => {

let context=useContext(SongContext)
let imgSource=`/images/${context.songselected.imgUrl}`
let audioSource=`/audio/${context.songselected.audioUrl}`

    return (
        <div>
            
            <div>
                {console.log("From selected:"+context.songselected)}
                <img src={imgSource} alt="Arabic Kuthu" />
                <br /> <br /> <br />
                <div className='audioplayer'>
                    <audio controls className='audiocontrol'>
                        <source src={audioSource} />
                    </audio>
                </div>
            </div>

        </div>
    )
}

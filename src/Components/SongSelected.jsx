import React, { useContext } from 'react'
import { SongContext } from '../store/SongContext'
import './SongSelected.css'


export const SongSelected = () => {

    let context = useContext(SongContext)
    let imgSource = `/images/${context.songselected.imgUrl}`
    let audioSource = `/audio/${context.songselected.audioUrl}`

    return (
        <div className='cardselectedmain row'>

            <div className='col-md-4 col-sm-12 col1'>

            </div>
            <div className='col-md-4 col-sm-12 col2 '>
                <div className='cardselected ' >

                    <img src={imgSource} alt={context.songselected.album} />
                    <div className="card-body">
                        <div>
                            <p><span>Artist</span>: {context.songselected.artist}</p>
                            <p><span>Released</span>: {context.songselected.released}</p>
                            <p><span>Genre</span>: {context.songselected.genre}</p>
                        </div>
                        <div className='audioplayer'>
                            <audio controls className='audiocontrol'>
                                <source src={audioSource} />
                            </audio>
                        </div>
                    </div>

                </div>
            </div>
            <div className='col-md-4 col-sm-12 col3'>

            </div>

        </div >
    )
}

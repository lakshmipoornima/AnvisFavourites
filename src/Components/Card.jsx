import React, { useContext } from 'react'
import { SongSelected } from './SongSelected'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './Card.css'
import { SongContext } from '../store/SongContext'



export const Card = ({ song, id }) => {
    let navigate = useNavigate()
    let context = useContext(SongContext)

    let imgSource = `/images/${song.imgUrl}`


    const gotoSong = () => {
        console.log(song);
        context.showSelectedSong(song)
        navigate("/song")

    }


    return (
        <div className='cardmaindiv'>
            <div className="card" >
                <div className='innercard'>
                    <div className='imgdiv'>

                        <img src={imgSource} alt={song.album} />
                    </div>
                    <div className="card-body">
                        <div className='musicdetails'>
                            <p><span>Album</span> </p>
                            <p>{song.album}</p>
                        </div>
                        <div className='buttondiv'>
                            <button className='btn btn-danger ' onClick={gotoSong} >
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

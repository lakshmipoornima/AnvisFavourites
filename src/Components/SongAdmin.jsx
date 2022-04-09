import React, { useRef } from 'react'


export const SongAdmin = ({addSong}) => {

let albumref=useRef("")
let artistref=useRef("")
let releasedref=useRef("")
let genreref=useRef("")
let imgref=useRef("")
let audioref=useRef("")


const addSongHandler=(event)=>{
    event.preventDefault();
    const album=albumref.current.value;
    const artist=artistref.current.value;
    const released=releasedref.current.value;
    const genre=genreref.current.value;
    const imgUrl=imgref.current.value;
    const audioUrl=audioref.current.value;
    console.log(album);

    addSong({"album":album,"artist":artist,"released":released,"genre":genre,"imgUrl":imgUrl,"audioUrl":audioUrl})

}

    return (
        <form >
            <div>
               <h2 style={{color:"white"}}> Album Details</h2>
            </div>
            <div>
                <input type="text" placeholder='Album' ref={albumref}/>
            </div>
            <br />
            <div>
                <input type="text" placeholder='Artist' ref={artistref}/>
            </div>
            <br />
            <div>
                <input type="text" placeholder='Released' ref={releasedref}/>
            </div>
            <br />
            <div>
                <input type="text" placeholder='Genre' ref={genreref}/>
            </div>
            <br />
            <div>
                <input type="text" placeholder='imgUrl' ref={imgref}/>
            </div>
            <br />
            <div>
                <input type="text" placeholder='audioUrl' ref={audioref}/>
            </div>
            <br />
            <div>
                <button className='btn btn-danger' onClick={addSongHandler}>Save</button>
            </div>
        </form>
    )
}

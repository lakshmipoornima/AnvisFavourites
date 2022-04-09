import React, { useState } from 'react'


export const SongContext=React.createContext({
    songselected:{},
    showSelectedSong:(song)=>{}
})

export function SongContextProvider(props){
    let [selected,setSelected]=useState({})
    const showSelectedSongHandler=(song)=>{
       setSelected(song)
    }
    const context={
        songselected:selected,
        showSelectedSong:showSelectedSongHandler
    }
    return(
        <SongContext.Provider value={context}>
            {props.children}
        </SongContext.Provider>
    )
}


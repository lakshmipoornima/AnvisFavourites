import React from 'react'

import './SongList.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import { Card } from './Card'



export const SongList = ({songslist}) => {

  return (
      <div className='row '>
          <div className='col-lg-10 col-sm-4'>
            {songslist.map(song=><Card song={song} id={song.id}/>)}
           
          </div>
      </div>
  )
}

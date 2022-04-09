import logo from './logo.svg';
import './App.css';
import { SongList } from './Components/SongList';
import { Layout } from './path/Layout';
import { Route, Routes } from 'react-router-dom';
import { SongSelected } from './Components/SongSelected';
import { SongAdmin } from './Components/SongAdmin';
import { useEffect, useState } from 'react';





function App() {

  let [songslist, setSongs] = useState([])

  useEffect(() => {
    fetch("https://anvisfavourites-922ec-default-rtdb.firebaseio.com/anvisfavourites.json").then(x => x.json())
      .then(data => {
        console.log(data);
        let songs_data = []
        Object.keys(data).forEach(key => {
          let obj = {
            id: key,
            ...data[key]
          }
          songs_data.push(obj);
        });
        setSongs(songs_data)
        console.log(songs_data);
      })
  }, [])


  const addSong = (song) => {
    let obj = song
    console.log(song);

    fetch("https://anvisfavourites-922ec-default-rtdb.firebaseio.com/anvisfavourites.json", {
      method: "POST",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((resp) => console.log("Success")).catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<SongList songslist={songslist}/>} />
          <Route path="/song" element={<SongSelected />} />
          <Route path="/songadmin" element={<SongAdmin addSong={addSong} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

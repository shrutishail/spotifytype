import React, { useState, useEffect } from 'react'
import { DynamicStar } from 'react-dynamic-star';
import Addsong from './Addsong'
import Star from './Star';
import axios from 'axios'
import './style.css'
//import axios from 'axios'


const Top10songs = () => {
  const [pr, setPr] = useState(true)
  const [artist, setArtist] = useState([])
  const [songs,setSongs]=useState([])

  useEffect(() => {
    (async () => {
      const data = await axios('/getsongs');
      setSongs(data.data);
    })();
  },[])
  useEffect(() => {
    (async () => {
      const data = await axios('/getartists');
      setArtist(data.data);
    })();
  }, [])
  
  console.log(artist);
  console.log(songs);
  
 
  const addsongs = () => {
    setPr(false)
  }

  return (
    <>
    {pr?
    
      <div>
    
      <div class="row m-4">

        <h6 class="col-11 ">Top 10 Songs</h6>
            <button class="col-1 bg-secondary" onClick={addsongs}> +Add Songs</button>
            </div>
        <hr></hr>
      
      
    
      <div>
        
      <table class="table table-bordered">
  <thead>
    <tr class="bg-secondary">
      <th scope="col">Artwork</th>
      <th scope="col">Songs</th>
      <th scope="col">Date of Realease</th>
      <th scope="col">Artist</th>
      <th scope="col">Rate</th>
    </tr>
  </thead>

                {songs.map((elem) => {
                  return (
                    <tbody>
                      <>
                        <td ><img src={elem.artwork} alt="img" id="img"></img></td>
                        
                      <td>{elem.name}</td>
                      <td>{elem.dor}</td>
                      <td>{elem.sel}</td>
                      <td><Star  /></td>
                    </>
                    </tbody>
                     
                      
                    
                    
     )
                })}
                
 
 
</table>
            
        
      </div>
    </div>: <Addsong />}
    
    </>
     
   
  )
}


const Top10artist = () => {
  const [artist, setArtist] = useState([])
  const [songs,setSongs]=useState([])
  useEffect(() => {
    (async () => {
      const data = await axios('/getsongs');
      setSongs(data.data);
    })();
  },[])
  useEffect(() => {
    (async () => {
      const data = await axios('/getartists');
      setArtist(data.data);
    })();
  }, [])
  return (
    <>
    <div class="row m-4">
<h6 class="col-11">Top 10 Songs</h6>
      </div>
      <hr></hr>
    <div>
    <table class="table table-bordered">
  <thead class="bg-">
    <tr class="bg-secondary">
      <th scope="col">Artist</th>
      <th scope="col">Date of Birth</th>
      <th scope="col">SingerBio</th>
      
    </tr>
  </thead>
          
            {artist.map((elem) => {
              return (
                <tbody>
                  <td>{elem.name}</td>
                  <td>{elem.dob}</td>
                  <td>{elem.bio}</td>

                  </tbody>
              )
    
  })}
    
  
</table>
    </div>
    
</>
  )
}





export { Top10artist ,Top10songs}

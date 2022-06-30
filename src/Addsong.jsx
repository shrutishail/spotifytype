import React, { useState,useEffect} from 'react'
import Addartist from './Addartist'
import axios from 'axios'

const Addsong = () => {
    const [add, setAdd] = useState(true)
    const [artist, setArtist] = useState([])
    useEffect(() => {
        (async () => {
          const data = await axios('/getartists');
          setArtist(data.data);
        })();
      }, [])
    const addartists = () => {
        setAdd(false)
    }
    const cancel = () => {
        setAdd(true)
    }
    const cancel2 = () => {
        setAdd(true)
    }
    return (

        <>
            {add ?
                <div>
                    <div>
                        <h3>Adding a new song</h3>
                        <hr></hr>
                    </div>

                    <div>
                        <form action='/postsongs' method='Post' type='submit'>

                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 ms-2 col-form-label">Songs Name</label>
                                <div class="col-sm-2">
                                    <input type="text" class="form-control" name="name" ></input>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 ms-2 col-form-label">Date Realease</label>
                                <div class="col-sm-2">
                                    <input type="date" class="form-control" name="dor" ></input>
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 ms-2 col-form-label">Artwork</label>
                                <div class="col-sm-2">
                                    <input type="file" class="form-control" name='artwork'></input>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 ms-2 col-form-label">Artist</label>
                                <div class="col-sm-2">
                                    <div class="dropdown">
                                  <label>select</label>      
                                        <select name='sel'>
                                            {artist.map((elem) => {
                                                return (
                                                    <>
                                                        <option>{elem.name }</option>
                                                   </>
                                               )
                                           })}

                                </select>
                                
                                        <button onClick={addartists} >Add Artist</button>
                                    </div>
                                    </div>
                            </div>

                            


                            <button>Cancel</button>
                        <button>save</button>


                        </form>
                        
                    </div> </div> : <Addartist />}

        </>

    )
}

export default Addsong
import React from 'react'
import './css/Addartist.css'
const Addartist = () => {

    const submit = (e) => {
       
        
    }

    
  return (
      <>
          <div >
              
          <h4>Add artist</h4>
              <hr></hr>
          </div>
          <div >
          <form action='/postartist' method='POST'  type="submit">
          <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 ms-2 col-form-label"> Artist Name</label>
                                <div class="col-sm-2">
                                    <input type="text" class="form-control"  name="name"></input>
                                </div>
                  </div>
                  
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 ms-2 col-form-label"> Date of Birth</label>
                                <div class="col-sm-2">
                                    <input type="date" class="form-control"  name='dob'></input>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 ms-2 col-form-label">Bio</label>
                                <div class="col-sm-2">
                                <div class="form-group">
    
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='bio'></textarea>
  </div>
                                </div>
                            </div>
                            <button>Cancel</button>
                        <button >save</button>
              
                  </form>
                  </div>
          

            
          
          
  </>
  )
}

export default Addartist
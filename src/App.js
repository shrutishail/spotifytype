//import Addartist from "./Addartist";
//import Addsong from "./Addsong";
//import Top10artist from "./Top10artist";
import { Top10songs, Top10artist } from "./Home";


function App() {
  return (
    <>
      <div class="row ms-1 me-1">
      <nav class="navbar navbar-expand-lg bg-secondary">
       
          <a class="navbar-brand col-1 bg-light ">Home</a>
          <h1 class="col-9"></h1>
          
        
          <input class="form-control" type="search" placeholder="Search" aria-label="Search" size="100px"></input>
      </nav>
      </div>
    <Top10songs /><hr></hr><br></br>
    <Top10artist />
    </>


  )
}

export default App;

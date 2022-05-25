import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

function Home(props) {
    const [value, setValue] = useState({profile: null, repos: null});
    console.log(value);
    return (
        <div className="root">
        <Header search={props.searcher} setValue={setValue} />
        <Main profile={value.profile} repos={value.repos}/>
      </div>
    );
  }
  
  export default Home;

import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import axios from "axios";




const Search = () => {
    const [text, setText] = useState("없음");
    const clicked = () => {
        axios
          .get("http://127.0.0.1:8000/Search/", {
            params: {
              abc: "가나다",
            },
          })
          .then((response) => setText(JSON.stringify(response.data)));
      };
    
    
   return (
   
      
       <div>
        <h1>{text}</h1>
            <form>
              
      


              <button onClick={clicked}>검색</button>
            </form>
        </div>
    
   );
 }

export default Search;



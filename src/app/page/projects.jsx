'use client';

import { IoIosStarOutline } from "react-icons/io";
import { FaCodeFork } from "react-icons/fa6";

import './projectStyle.css'
import { useState } from 'react';

export default function projects() {

  const [dados, setDados] = useState([]);

    async function getApi() {
      try {
        const response = await fetch("https://api.github.com/users/thalisson-sousa/repos");
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.log(error);
      }
    }

    getApi();

  return (
    <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "50px"}}>
      {
        dados.map(x => (
          <div key={x.id} style={{border: "1px solid black", marginBottom: "2px", padding: "1em", background: "var(--linear-gradient)", width: "600px", borderRadius: "10px"}}>
            <div style={{display: "flex", gap: "1em", alignItems: "center"}}>
              <img src={x.owner.avatar_url} style={{width: "40px", height: "40px", borderRadius: "50%"}}></img>
              <a href='https://github.com/thalisson-sousa' style={{textDecoration: "none", color: "white"}}><p>{x.owner.login}</p></a>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "baseline", textAlign: "center"}}>
                <h2>{x.name}</h2>
                <p>{x.description}</p>
                <div style={{display: "flex", gap: "10px"}}>
                  <a href={x.html_url}>
                    <button>Go To Project</button>
                  </a>

                  {
                    x.homepage ? <a href={x.homepage}><button>View Project</button></a> : <p></p>
                  }
                </div>
              </div>
              <div>
                <img src='https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU' style={{width: "200px", height: "200px"}}></img>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                  <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "5px"}}>
                  <IoIosStarOutline />
                    <p>{x.stargazers_count}</p>
                  </div>
                  <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "5px"}}>
                    <FaCodeFork/>
                    <p>{x.forks_count}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import SerchBar from './components/SerchBar'
import GlobalStyled from './styles-components/GlobalStyle';
import styled, { css } from 'styled-components';
import sun from "./imiges/sun.svg"
import moon from "./imiges/moon.svg"
import { createContext } from 'react';
import pin from "./imiges/pin.svg"
import url from "./imiges/url.svg"
import twitter from "./imiges/twitter.svg"
import building from "./imiges/building.svg"
import pindark from "./imiges/1-pin.svg"
import urldark from "./imiges/2-url.svg"
import twitterdark from "./imiges/3-twitter.svg"
import buildingdark from "./imiges/4-building.svg"

export const ThemeContext = createContext(null);

function App() {
const [getData, setGetData] = useState()
const [getInfo, setGetInfo] = useState("")
const [theMe, setTheme] = useState("light")
const [message , setMessage] = useState()
const [formattedDate, setFormattedDate] = useState("");






const getUser = async () => {
 try {
  const response = await fetch(`https://api.github.com/users/${getInfo}`);
   const data = await response.json();

 
    setGetData(data); 
   setMessage(data.message)

   if (data.created_at) {
    const createdAtDate = new Date(data.created_at);
    const formattedDate = createdAtDate.toLocaleString('en-UK',{
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    setFormattedDate(formattedDate); 
  }
   
  } catch(err) {
    
  }
};



const aboutData = (event) => {
  setGetInfo(event.target.value);
};

const toggleTheme = () => {
  setTheme((curr) => ( curr === "light" ? "dark" : "light"))
}


  return (
    <ThemeContext.Provider value={{theMe, toggleTheme}}>
      
    <Section className='App' theMe={theMe}  >
    <div className='App' id={theMe} >
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Russo+One&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
<header>
<h1>devfinder</h1>

<div onClick={toggleTheme}>
      {theMe === 'light' ? (
        <div className='moon'>
        <p className='light'>Dark</p>
        <img className='sun' src={moon} alt="Moon" />
       
        </div>
      ) : (
        <div className='moon' >
         <p className='light'>LIGHT</p>
         <img className='sun' src={sun} alt="Sun" />      
        </div>
      )}
    </div>
  
</header>
   <SerchBar getInfo={getInfo} aboutData={aboutData} getUser={getUser}  theMe={theMe}  getData={getData} message={message}  />
    <div className='box'>
    {getData ? (
       <div>
        <div className='avatar'>
      <img src={getData.avatar_url ? getData.avatar_url : "Not Available"} alt="" />
      <div className='name'>
     <h2>{getData.name ? getData.name : "Not Available"}</h2>
     <p>{getData.login ? getData.login  : "Not Available"}</p>
     <div>   {formattedDate} </div>
     </div>
     </div>
    <div className='lorem'> {getData.bio ? getData.bio : "This profile has no bio"}</div> 
     <div className='public'  >
     <p>Repos<span> {getData.public_repos} </span></p>
    <p>followers<span> {getData.followers} </span></p>
    <p>following<span>  {getData.following} </span></p>
    </div>
    <div className='icons'>
      {theMe === "light" ?(
        <>
       
 <div className='iconline'><img className='left pin-icon '  src={pindark} alt=""/>   <p>{getData.location ? getData.location : "Not Available"}</p></div> 
 <div className='iconline'> <img className='left pin-icon '  src={urldark} alt="" />  <a href= {getData.blog}> {getData.blog ? getData.blog.slice(0, 20) :  "Not Available" }</a> </div>
 
   <div className='iconline'><img className='pin-icon left' src={twitterdark} alt=""/>   <p>{getData.twitter_username ? getData.twitter_username :  "Not Available" } </p></div>
 <div className='iconline'> <img className='pin-icon left' src={buildingdark} alt=""/>   <p>{getData.company ? getData.company :  "Not Available" }</p>  </div>
  </>
  ) : (
    <>
   
  <div className='iconline'><img className='pin-icon' src={pin} alt="" /> <p>{getData.location ? getData.location : "Not Available"}</p></div> 
 <div className='iconline'> <img className='pin-icon' src={url} alt=""/> <a href={getData.blog}> {getData.blog ? getData.blog.slice(0, 20) :  "Not Available" }</a></div>
  <div className='iconline'><img className='pin-icon' src={twitter} alt=""/> <p> {getData.twitter_username ? getData.twitter_username :  "Not Available"} </p></div>
 <div className='iconline'> <img className='pin-icon' src={building} alt=""/> <p> {getData.company ? getData.company :  "Not Available" }</p> </div>
  </>
  )}
  </div>
    </div>
     ) : (<p></p>) }
     </div>
   



   <GlobalStyled/>
   </div>
    </Section>
   
    </ThemeContext.Provider>
    )
}

export default App
 const Section = styled.section `
 display: flex;
 flex-direction: column;
 background: #141D2F;
 width: 375px;
 height: 100%; 
padding: 31px 24px;


header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 35px;
}
.light {
  margin-right: 16px;

}
.moon {
  display: flex;
}
.sun  {
  width: 20px;
height: 20px;
cursor: pointer;

}

 h1 {
  color: #FFF;
font-family: Space Mono;
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: normal;
 }
 p {
  

font-family: Space Mono;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 2.5px;
 }
 .lorem {
  padding-top: 33px;
  color: #FFF;
font-family: Space Mono;
font-size: 13px;
font-style: normal;
font-weight: 400;
height: 90px; 
overflow: hidden;
 }
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 327px;
height: 517px;
margin-top: 16px;
  border-radius: 15px;
background: #1E2A47;
padding: 33px 24px 0 24px;

}
  img {
    width: 70px;
height: 70px;
border-radius: 70px;
  }
  .avatar {
    display: flex;
    flex-direction: row;

  }
  .name {
    display: flex;
    flex-direction: column;
    margin-left: 19px;
    align-items: start;
    justify-content: space-between;
  }
  h2 {
   
font-family: Space Mono;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
  .public {
    margin-top: 23px;
  width: 279px;
height: 85px;
flex-shrink: 0;
border-radius: 10px;
background: #141D2F;
display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 14px 10px 15px;
  }
  .public p:nth-child(1),
.public p:nth-child(2),
.public p:nth-child(3)  {
  font-size: 11px;
  text-align: center;
}

span {
  color: #FFF;
text-align: center;
font-family: Space Mono;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
}
.icons {
display: flex;
flex-direction: column;
margin-top: 24px;
justify-content: space-between;
height: 130px;
}
.iconline{
  display: flex;
  flex-direction: row;
}

 .pin-icon {
  width: 20px;
height: 20px;
margin-right: 20px;
}

.icons p:nth-child(1),
p:nth-child(2),
p:nth-child(3),
p:nth-child() {
  color: #FFF;
font-family: Space Mono;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;

}
a {
  cursor: pointer;
}

${({ theMe }) => theMe === 'light'
    ? css`
   

        background: #F6F8FF;
        color: #4B6A9B;

        & h1 , & p{
          color: #222731;

        }
        & .name {
    & h2 {
    color: #2B3442;
   } 
     & p {
color: #0079FF;
     }
     & div {
      color: #697C9A;
     }
  }
   & .lorem {
    color: #4B6A9B;
   }
        & .box {
          background: #FEFEFE;
          box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);

        }
        & .public {
         background: #F6F8FF;

         & p {
          color: #4B6A9B;
         } 
         & span {
          color: #2B3442;
         }
        }
        & .icons {
          fill: #4B6A9B
        
        }
        & a {
          color: #4B6A9B;
        }
        
      `
    : css`
p {
  color: #FFFFFF;
}
a {
  color: #FFFFFF;
}
        & .name {
    & h2 {
      color: #FFF;
   } 
     & p {
color: #0079FF;
     }
     & div {
      color: #FFFFFF;
     }
  }
      `}

      @media (min-width: 768px)  {
       width: 768px;
       padding: 140px 98px 236px 97px;
       
    .lorem {
      width: 493px;
      font-size: 15px;
     height: 70px;
    }
   .box {
    width: 573px;
height: 481px;
   }

   img {
    width: 117px;
height: 117px;
   }
   .name {
    margin-left: 41px;
    justify-content: space-evenly;
   }

  h2 {
    font-size: 26px;
  }
  .public {
    width: 493px;
height: 85px;
justify-content: space-around;

  }
  .public p:nth-child(1),
.public p:nth-child(2),
.public p:nth-child(3)  {
  font-size: 13px;
  display: flex;
  flex-direction: column;
}
span {
  font-size: 22px;
}

.icons {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
}

.icons div:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}

.icons div:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}

.icons div:nth-child(3) {
 
  grid-column: 2;
  grid-row: 1;
}

.icons div:nth-child(4) {
  grid-column: 2;
  grid-row: 2;
}


}   
@media (min-width: 1440px) {
  width: 1440px;
  padding: 144px 355px 145px 355px;
.name {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  justify-content: space-between; 
  align-items: center; 
  position: relative;
    width: 100%;
}
.name h2,
.name p {
  grid-column: 1;
}

.name div {
 position: absolute;
 right: 0;
 top:29px;
}

.lorem {
  width: 480px;
  margin: 0 0 0 154px;
padding-top: 0;
height: 60px;
}
 .box {
  padding: 48px 0 0 48px;
  width: 730px;
 }

 .public {
  width: 480px;
  margin: 25px 0 0 154px;
 }
 .icons {
  margin: 25px 44px 0 154px;
 }
}

 `  



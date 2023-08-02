import styled, { css } from 'styled-components';
import shape from "../imiges/Shape.svg"


export default function SerchBar({ getInfo, aboutData, getUser, theMe , getData , message}) {


return (
<Section  theMe={theMe} >
    <div>
        <img className="shape" src={shape} alt="" />
    <input type="text"   value={getInfo} onChange={aboutData} placeholder="Search GitHub username…" />
   {message === "Not Found" ? ( <p className='result'> No results</p> ) : (null) }
        <button onClick={getUser}>Search</button>
     
    </div>
</Section>
)


}

const Section = styled.section `
   div{
    position: relative;
   } 
   .result{
    position: absolute;
    right: 100px;
    top: 25px;
    color: #F74646;
font-family: Space Mono;
font-size: 8px;
font-style: normal;
font-weight: 700;
line-height: normal;
   } 
   .shape{
    position: absolute;
    left: 16px;
    top: 21px;
    width: 20.048px;
    height: 20px;

   }
   input {
    width: 327px;
    height: 60px;
    border-radius: 15px;
    background: #1E2A47;
    color: #FFF;
    font-family: Space Mono;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; 
    padding: 8px 175px 8px 45px;
    border: none;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);

   }
button {
    position: absolute;
    width: 84px;
    height: 46px;
    border-radius: 10px;
    background: #0079FF;
    right: 7px;
    top: 7px;
    border: none;
    color: #FFF;
font-family: Space Mono;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
}
button:hover {
  
background: #60ABFF;
}

${({ theMe }) => theMe === 'light'
    ? css`
    input {
    background: #FEFEFE;
    color: #4B6A9B;
    }
      `
    : css`
       
      `}

      @media (min-width: 768px)  {
      .result {
            font-size: 15px;
            right: 140px;
        } 
        .shape {
            left: 32px;
            width: 24.058px;
            height: 24px;

        }

       input {
        width: 573px;
        height: 69px;
        padding: 22px 263px 22px 80px;
       }
       button {
        top: 10px;
        right: 10px;
        width: 106px;
height: 50px;

       }
      }
      @media (min-width: 1440px) {
    
   input {
    width: 730px;
height: 69px;
padding: 22px 300px 22px 80px;
   }

}

`
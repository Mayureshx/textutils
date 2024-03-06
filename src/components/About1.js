// import React, { useState } from "react";

export default function About1(props) {

    let myStyle={
        color: props.mode==='dark' ? 'white' : 'black',
        backgroundColor: props.mode==='dark' ? 'rgb(36 74 104)' : 'white',
       
    }

    // const [myStyle,setMyStyle] = useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle=()=>
    // {
    //     if(myStyle.color==="black")
    //     {
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black",
    //             border:"1px solid white"
                


               
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

   
  return (
    <div className="conainer mx-3" style={ {color: props.mode==='dark' ? 'white' : 'black' }}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
            Fun
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  style={myStyle}>
              <strong>TSeriously, this is a fun generator to just enjoy with no other purpose in mind. There are a lot of people who just happen across this free tool, but once they find it, spend much more time than they anticipated generating unusual random words again and again. Time may fly by as you play with this tool.
                </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              New Word of the Day
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  style={myStyle}>
              
            <strong>If you're the type of person who loves to learn a new word a day, this may be the perfect tool for you to visit each morning. Since the words in the generator are fun and quirky, it's actually a lot of fun (and not a chore) learning that new word a day. 
                </strong>I
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
               Guessing Game
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  style={myStyle}>
              <strong>This generator can also provide a lot of fun when you're with friends. All you need to do is generate a random unusual word and then let your friends try and guess the meaning of it. Again, this is a great way to group learn new vocabulary in a nontraditional study method. .</strong> It is
              
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

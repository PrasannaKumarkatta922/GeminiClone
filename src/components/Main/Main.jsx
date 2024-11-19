import React, { useContext } from "react";
import './Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";


const Main=()=>{

        const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);

    return(
        <>
        <div className="main">
        <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
        </div>
       


        <div className="main-container">

        
                {!showResult?<>
                    <div className="greet">
                <p>
                    <span>Hello,Bro..</span>
                </p>
                <p>How can I help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                
                <div className="card">
                    <p>Briefly summarize this concept</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readibility</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
                    </>:
                <div className="result">
                    <div className="result-title">
                       <img src={assets.user_icon} alt="" /> 
                    <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading?
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>:
                            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    
                    }
                    {/* to hide tags and show only data */}
                    </div>
                </div>
                }

           
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                  <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                   {input? <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    :null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may displat inaccurate info,including about people,but double check Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo hic fugiat animi? Deserunt pariatur laborum voluptates quae rem error eveniet iste. Perspiciatis quidem iure labore! Nemo, rerum commodi. Assumenda, delectus.
               </p>
            </div>
        </div>
        </div>
        </>
    )
}


export default Main;
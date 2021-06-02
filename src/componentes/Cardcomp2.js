import React from 'react';
import "./styles/Frame-34.css";
// <div className=""> </div>//
export default function Component(props) {
    return (
        <>
            <div className="cardframe34">
                <div className="card_headerframe34">
                    <div className={`title2 ${props.data1.theme}`}>
                        <p>
                            {props.data1.title}
                        </p>
                    </div>
                    <div className="right_points2">
                        <img src={props.data1.point1} alt=""/>
                    </div>
                </div>
                <div className={`card_description2 ${props.data1.tipo}`}>
                    <img src={props.data1.marcador} alt=""/>
                    <p>
                        {props.data1.description}
                    </p>
                </div>
                <div className="card_footer2">
                        <div className='card_iconos'>
                            <div className="card_date2"> 
                            <img src={props.data1.image_perfil} alt={`Avatar de ${props.data1.title}`}/>
                                <p>
                                    {props.data1.date3}
                                </p> 
                            </div> 
                            <div className="card_sms"> 
                                <img src={props.data1.mensage1} alt=""/> 
                                
                                <p>
                                    {props.data1.mensage2}
                                </p>
                            </div>
                            <div className="card_clip2"> 
                                <img src={props.data1.adjunt1} alt=""/> 
                                <p>{props.data1.adjunt2}</p>
                            </div>
                            
                        </div>
                </div>
            </div>
        </>
    )
}
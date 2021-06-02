import React from 'react';
import "./styles/Frame.css";
// <div className=""> </div>//
export default function Component(props) {
    return (
        <>
            <div className="cardframe">
                <div className="card_headerframe">
                    <div className={`title ${props.data.theme}`}>
                        <p>
                            {props.data.title}
                        </p>
                    </div>
                    <div className="right_points">
                        <img src={props.data.point1} alt=""/>
                    </div>
                </div>
                <div className="card_description">
                    <p>
                        {props.data.description}
                    </p>
                </div>
                <div className="card_footer">
                        <div className='card_iconos'>
                            <div className="card_date"> 
                                <img src={props.data.date2} alt=""/>
                                
                                <p>
                                    {props.data.date3}
                                </p> 
                            </div> 
                            <div className="card_sms"> 
                                <img src={props.data.mensage1} alt=""/> 
                                
                                <p>
                                    {props.data.mensage2}
                                </p>
                            </div>
                            <div className="card_clip"> 
                                <img src={props.data.adjunt1} alt=""/> 
                                <p>{props.data.adjunt2}</p>
                            </div>
                            
                        </div>
                        <img src={props.data.image_perfil} alt={`Avatar de ${props.data.title}`}/>
                </div>
            </div>
        </>
    )
}
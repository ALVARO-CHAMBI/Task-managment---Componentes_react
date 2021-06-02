import React from 'react';
import "./styles/Frame-37.css";
// <div className=""> </div>//
export default function Component(props) {
    return (
        <>
            <div className="cardframe37">
                <div className="card_headerframe37">
                    <p>
                        {props.data2.title}
                    </p>
                    <img src={props.data2.point} alt=""/>
                </div>
                <div className="cardbody1frame37">
                    <img src={props.data2.imagenperfil1} alt=""/>
                    <h1>
                        {props.data2.subtitulo1}
                        <h2>
                            {props.data2.trabajo1}
                        </h2>
                    </h1>
                    
                    <img src={props.data2.imagenperfil2} alt=""/>
                    <h1>
                        {props.data2.subtitulo2}
                        <h2>
                            {props.data2.trabajo2}
                        </h2>
                    </h1>
                </div>
                <div className="cardbody2frame37">
                        <img src={props.data2.imagenperfil3} alt=""/>
                        <h1>
                            {props.data2.subtitulo3}
                            <h2>
                                {props.data2.trabajo3}
                            </h2>
                        </h1>
                    <div className="card_addmember">
                        <img src={props.data2.circuloperfil} alt=""/>
                        <p>
                            {props.data2.subtitulo4}
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
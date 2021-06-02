import React from 'react';
import Cardcomp from './componentes/Cardcomp';
import getContentCards from './assets/getContentCards';
import Cardcomp2 from './componentes/Cardcomp2';
import getContentCards2 from './assets/getContentCards2';
import Cardcomp3 from './componentes/Cardcomp3';
import getContentCards3 from './assets/getContentCards3';
import './global.css';

export default function App() {
    const data = getContentCards();
    const data1= getContentCards2();
    const data2= getContentCards3();
    //console.log(data);
    //const card = data[0]
    return (
        <div className="container_card">
            {
                data.map((component)=>{
                    return <Cardcomp data={component}/>
                })
            }
            {
                data1.map((component)=>{
                    return <Cardcomp2 data1={component}/>
                })
            }
            {
                data2.map((component)=>{
                    return <Cardcomp3 data2={component}/>
                })
            }
        </div>
    );
}
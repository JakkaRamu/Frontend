import { useState } from "react";

const RandomColor=()=>{
    const [typeOfColor,setTypeOfColor]=useState('hex')
    const [color,setColor]=useState('#000')
    const randomGenerator=(length)=>{
        return Math.floor(Math.random()*length)
    }

    const handleRandomHexColor=()=>{
        let hexColor='#'
        let hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        for(let i=0;i<6;i++){
            hexColor+=hex[randomGenerator(hex.length)]
        }
        setColor(hexColor)
      
    }
    const handleRandomRgbColor=()=>{
        const r=randomGenerator(256)
        const g=randomGenerator(256)
        const b=randomGenerator(256)
        const rgb=`rgb(${r},${g},${b})`
        setColor(rgb)
        
    }
    return <>
        <div className="container" style={{background:color}}>
            <button onClick={()=>setTypeOfColor('rgb')}>RGB Color</button>
            <button onClick={()=>setTypeOfColor('hex')}>HEX Color</button>
            <button onClick={typeOfColor==='hex'?handleRandomHexColor:handleRandomRgbColor}>Random Color Generator</button>
            <div className="info" style={{ display:'flex',justifyContent:'center',alignItems:'center',color:'#fff',     fontSize:'60px',marginTop:'20px'}}>
                {typeOfColor==='hex'?<h2>HEX &nbsp;
                    {
                        color[0]==='#'?<p2>{color}</p2>:null
                    }
                </h2>:<h2>RGB &nbsp;
                    {
                        color[0]==='r'?<p2>{color}</p2>:null
                    }
                </h2>
                }
                
            </div>
        </div>
    </>
}
export default RandomColor;
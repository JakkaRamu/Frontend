import { useState } from 'react';
import data from './Data';

const Accordian=()=>{
    const [selected,setSelectde]=useState(null)
    const [enableMultiSelection,setEnableMultiSelection]=useState(false);
    const [multiple,setMultiple]=useState([])
    const handleSingleSelection=(curId)=>{
        setSelectde(curId === selected?null:curId)
    }
    const handleMultipleSeletion=(curId)=>{
        let cpyMultiple=[...multiple]
        let findIndexOfCurId=cpyMultiple.indexOf(curId)
        if(findIndexOfCurId===-1) cpyMultiple.push(curId)
        else cpyMultiple.splice(findIndexOfCurId,1)
        setMultiple(cpyMultiple)
    }
    console.log(multiple)
    return <>
        <div className="wrapper">
            <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multiple Seletion</button>
            <div className="Accordian">
                {
                    data && data.length>0?(
                        data.map((dataItem)=>(
                            <div className="item">
                                <div className="title" onClick={enableMultiSelection?()=>{handleMultipleSeletion(dataItem.id)}:()=>{handleSingleSelection(dataItem.id)}}>
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelection?
                                    multiple.indexOf(dataItem.id)!==-1 && <div>{dataItem.answer}</div>:
                                    selected===dataItem.id&&<div>{dataItem.answer}</div>
                                }
                            </div>
                        ))
                    ) 
                    :(<div>Data Not Found</div>)
                }
            </div>
        </div>
    </>
}
export default Accordian;
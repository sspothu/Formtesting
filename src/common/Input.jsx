import React,{useState} from 'react'

const Input = ({item,onchange}) => {
    const [val, setVal] = useState("");
    onchange(val,item)
  return (
    <>
    <div className="mb-3">
    <label htmlFor={item.name}>{item.name}</label>
    <input type={item.type} value={item.value} placeholder={item.placeholder} onChange={(e)=>setVal(e.target.value)} />
    <span className='text-danger'>{item.error ? item.errorMessage : ""}</span>
    </div>
    </>
  )
}

export default Input
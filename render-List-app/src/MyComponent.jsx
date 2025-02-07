import React , {useState} from 'react'

export default function MyComponent() {
  
  const [name,setName] = useState("");
  
  function handleNameChange(event){
    setName(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>
    </div>
  );
}


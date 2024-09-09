import { useState } from "react"

export default function About(){
    const [list, setList] = useState([]);
    const [description, setDescription] = useState('');

    function RenderList(){
        return list.map(item => {
            return <li key={item.id} onClick={() => removeItem(item.id)}>{item.description}</li>
        })
    }

    function addItem(){
        const item = {
            id: list.length,
            description: description
        }
        setList([...list, item])
    }

    function removeItem(id){
        const copyList = list.filter(item => item.id !== id)
        setList([...copyList]);
    }

    return <>
        <input onChange={(e) => setDescription(e.target.value)} />
        <button onClick={addItem}>Add</button>
        <ul>
            <RenderList />
        </ul>
    </>
}
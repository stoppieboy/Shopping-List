import './App.css'
import deletelogo from './assets/delete.png'
import { useState, useRef } from 'react'

function App() {

    const [todoList, setList] = useState([])
    const [item, setItem] = useState('')
    const inputRef = useRef(null);

    const addItem = () => {
        setList((state) => [...state, item]);
        setItem('')
        inputRef.current.focus();
    }

    const deleteItem = (index) => {
        setList(todoList.filter((v, i) => {
            return i != index;
        }))
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            addItem();
        }
    }
    
    return (
        <main className='container'>
            <h2>Items To Buy</h2>
            <div className="inputs">
            <input autoFocus ref={inputRef} type="text" onKeyDown={handleKeyDown} onChange={(e) => setItem(e.target.value)} value={item}/>
            <button onClick={addItem}>Add</button>
            </div>
            <ul>{todoList.map((list_item, index) => (
                <li key={list_item+index}>{list_item}<img onClick={()=>{deleteItem(index)}} src={deletelogo} /></li>
            ))}</ul>
        </main>
    )
}
    
export default App

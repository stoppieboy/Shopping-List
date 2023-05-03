import './App.css'

const todoList = ['item-1', 'item-2']

function App() {
    
    return (
        <main className='container'>
            <h2>Items To Buy</h2>
            <input type="text" name="" id="" />
            <button>Add</button>
            <ul>{todoList.map((item, index) => (
                <li key={item+index}>{item}</li>
            ))}</ul>
        </main>
    )
}
    
export default App

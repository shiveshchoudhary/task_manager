import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddTask from './components/AddTask'
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
 
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
    
  },[])
  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data

  }
  // Addition of tasks
  const addTasks =async (task) => {
    const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers :{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    
    const data=await res.json()

    setTasks([...tasks, data])
    
    //const id = Math.floor(Math.random() * 10000) +1
    //const newTask = { id,...task }
    //setTasks([...tasks, newTask])
  }
  // Deletion of tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{method: 'DELETE',})
    setTasks(tasks.filter((task)=>task.id !==id))
  }
  return (<Router> <div className="container">
      <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
      <Route path='/' exact 
      render={(props) => (
        <>
        {showAddTask && <AddTask onAdd={addTasks}/>}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
        {deleteTask}/>: ("You have no tasks to work on")}
        </>
      )
      } />
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>

  );
}

export default App;

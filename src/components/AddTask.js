import React from 'react'
import { useState } from 'react';
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (ev) => {
        ev.preventDefault()

        if (!text)
        {alert("Add a task")
        return}

        onAdd({ text,day,reminder })
        setText('')
        setDay('')
        setReminder(false)
    }
    
    
    return (
        <form className = "addform" onSubmit={onSubmit}>
            <div className = "form-control">
                <label>Task</label>
                <input type='task' placeholder='Add Task'
                value={text} onChange={
                    (woes) => setText(woes.target.value)
                } />
            </div>

            <div className = "form-control">
                <label>Day & Time</label>
                <input type='task' placeholder='Add Day and Time'
                value={day} onChange={
                    (woes) => setDay(woes.target.value)
                } />
            </div>

            <div className = "form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox'
                checked={reminder}
                value={reminder} onChange={
                    (woes) => setReminder(woes.currentTarget.checked)
                }/>
            </div>
            <input type='submit' value='Save Task' 
            className='btn btn-block'/>
            
        </form>
    )
}

export default AddTask

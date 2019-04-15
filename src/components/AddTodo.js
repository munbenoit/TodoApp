import React from 'react'

export default function AddTodo() {
  return (
    <form style={{display: 'flex'}}>
        <input 
            type="text"
            name="title"
            style={{ flex: '10', padding: '5px'}}
            placeholder="Add Todo ..."
        />
        <input
            type="submit"
            value="Submit"
            className="submitBtn"
            style={{flex: '1'}}
        />
    </form>
  )
}

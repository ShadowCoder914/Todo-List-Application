import React from 'react'
import { useState } from 'react'



const TodoList = () => {

    let [addToList, setaddToList] = useState("")

    return (
    <>
    <form >
    <div>TodoList</div>
        <div className="formgroup ">
            <label htmlFor="">Add to List</label>
            <br></br>
            <br></br>
            <input type="text" className="form-control" onChange={(e)=>{setaddToList(e.target.value)}} value={addToList} />
            <button type="submit" className="btn btn-success" value="Add">ADD</button>
        </div>
    </form>
    </>

    )
}



export default TodoList;
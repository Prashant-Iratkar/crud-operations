import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const AddUser = () => {
    const[value,setValue] = useState({
        name:"",
        surname:"",
        email:"",
        phone:""
    })

    const handleChange = (e) =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            const adduser = await axios.post('http://localhost:3000/api/create',value)
            const response = adduser.data

            if(response.success){
                toast.success(response.Message)
            }

            console.log(response)

        } catch (error) {
            console.log(error)
        }
        console.log(value)
    }



  return (
    <>
      <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text"  name='name' value={value.name} onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Surname</label>
                                    <input type="text" name='surname' value={value.surname} onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name='email' value={value.email} onChange={handleChange} className="form-control" required />

                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" name='phone' value={value.phone} onChange={handleChange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" data-bs-dismiss="modal" value="Add" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default AddUser

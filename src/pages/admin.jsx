import { useState } from 'react'
import './admin.css'



function Admin ({createData,updateData ,deleteData, members}){


    const [formData, setFormData] = useState({
        username: "",
        lastname: "",
        position: "",
      });
    
      const [formErrors, setFormErrors] = useState({
        username: "",
        lastname: "",
        position: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const validateForm = () => {
        let errors = {};
        let isValid = true;
    
        if (!formData.username.trim()) {
          errors.username = "Username is required";
          isValid = false;
        }
    
        if (!formData.lastname.trim()) {
          errors.lastname = "Last Name is required";
          isValid = false;
        }
    
        if (!formData.position.trim()) {
          errors.position = "Position is required";
          isValid = false;
        }
    
        setFormErrors(errors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // Submit the form data
          createData(formData.username, formData.lastname,formData.position)
          setFormData({ username: "",
          lastname: "",
          position: "",})
        } else {
          console.log("Form save failed due to validation errors.");
        }
      };





    return (
    <div className="admin">
      <h1>Create User Here</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          
          <input
          placeholder='Name'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.username}</span>
        </div>

        <div className="form-group">
          <input
          placeholder='Last Name'
            type="lastname"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.lastname}</span>
        </div>

        <div className="form-group">
          <input
          placeholder='Position'
            type="position"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.position}</span>
        </div>

        <button className='save-button' type="submit">Save</button>

      </form>
      <div className='table'>
        <table className='table2'>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Action</th>
            </tr>
            {members.map((member)=>{
            return <tr>
            <th>{member.name}</th>
            <th>{member.lastname}</th>
            <th>{member.position}</th>
            <th onClick={()=>{deleteData(member.id)}} style={{color:'red'}}>Delete</th>

        </tr>
        })
        }
        </table>
      </div>
        <div className='delete'> 
        <button className='delete-button' onClick={()=>{for(let i =0; i<members.length; i++){deleteData(members[i].id)}}}>Delete All</button>
        </div>
    </div>
    )
}
export default Admin
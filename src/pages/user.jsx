import React, { useState } from "react";
import './user.css'
function User ({members}){
    console.log(members)
    return (
      
        <table>
        <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
        </tr>
        
        {members.map((member)=>{
            return <tr>
            <th>{member.name}</th>
            <th>{member.lastname}</th>
            <th>{member.position}</th>
        </tr>
        })
        }
        </table>
        )
}
export default User 
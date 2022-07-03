import React from 'react'
import { useState } from 'react'


let data ={
    name:"",
    email:''
}
export const Form = () => {
  
  const [formData , setFormData] =useState(data)
  
  const handleChange =(e)=>
  {
       let {name , value ,type , checked}= e.target
     
    //   const ValueToupdate = type === "checked" 
    //                         ? checked : value
                           
    //  setFormData({...formData,[name]:ValueToupdate})
     //or
     if(type === "checked")
     {
        setFormData({...formData , [name]: "checked"})
     }
     else
     {
        setFormData({...formData , [name]:value})
     }

  }
  
  const handleSubmit =(e)=>
   {
    e.preventDefault()
    console.log(formData)
   }

  console.log(formData)
    return (
        <form onSubmit={handleSubmit}>
                   <div>
                       <input value={formData.name}
                              name="name"
                              placeholder='Enter Name'
                              onClick={handleChange}

            
                              />
                   </div>
                   
                   <div>
                       <input  value={formData.email}
                                name="password"
                               placeholder='Enter Email'
                               onClick={handleChange}

                               
                               />
                   </div>
                  
                  <div>
                    <select onChange={handleChange}
                            value={formData.country}
                            name="country"
                            >
                            
                            <option key="India">India</option>
                            <option key="USA">Usa</option>
                    </select>
                  </div>

                  <input type="checkbox"
                         onChange={handleChange}
                         checked ={formData.status}
                         name="checkbox"
                         />
                   <lable>Currentlty Working</lable> 
                 
                   <div>
                        <input type="submit"   />     
                   </div>
                   
          
        </form>
 
  )
}

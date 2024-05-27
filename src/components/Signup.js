import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import validator from "validator"

const Signup=()=>{
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        username:""
    })
    const [usernameError,setUsernameError]=useState('')
    const [mailError,setMailError]=useState('')
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('') 
    
  
    const validate = (value) => { 
  
        if (validator.isStrongPassword(value, { 
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1 
        })) { 
            setErrorMessage('') 
        } else { 
            setErrorMessage(' Password is not Strong!!') 
        } 
    } 
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData = new URLSearchParams();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        
        try{
        const response=await fetch('http://localhost:3001/signup',
            {
                method:'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' // Set the Content-Type header
                },
                body: formData.toString()
            }
        )
        console.log(response)
          const result=await response.json()
          console.log(result)
           if(response.ok){
            alert(result.message)
            navigate ('/login')
         }
         else{
            if(result.error === "Username already exists") {
                setUsernameError("Username already exists");
            } else if (result.error === "Mail already exists") {
                setMailError("Mail already exists");
            }  
         }
        }catch{
            console.log("Error occured while signing the form")
        }  
    }
    const handleChange=(e)=>{
        setData((prevState)=>{
           return({ ...prevState, [e.target.name]:(e.target.value) })
        })
    }
    return(
     <div className=" flex flex-col container   items-center h-screen justify-center bg-main bg-cover " > 
     
       <form className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 w-4/12 " onSubmit={handleSubmit} >
         <h2 class=" text-xl font-bold" >Create an Account</h2>
          <label htmlFor='name'> Name:</label>
          <input  className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="name" id="name" name="name" value={data.name} onChange={handleChange} placeholder="name" required ></input>
     <label htmlFor='username'>Username:</label>
      <input
        className={`shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${usernameError ? "border-red-500" : ""}`}
        type="text"
        id='username'
        value={data.username}
        onChange={handleChange}
        name="username"
        required
      />
      {usernameError && <p className="text-red-500 text-sm mt-1">{usernameError}</p>}

      <label htmlFor="email">Email:</label>
      <input
        className={`shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${mailError ? 'border-red-500' : ''}`}
        type="email"
        id="email"
        value={data.email}
        onChange={handleChange}
        name="email"
        required
      />
      {mailError && <p className="text-red-500 text-sm mt-1">{mailError}</p>}
          <label htmlFor="password">Password:</label>
          <input  className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" name="password"  value={data.password} onChange={handleChange} placeholder="******************" required ></input>
          {errorMessage === '' ? null : 
                    <p className="   text-xs  text-red-600" >{errorMessage}</p>} 

          <label htmlFor="confirmPassword" >Confirm Password:</label> 
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="confirmPassword" id="confirmPassword" name="confirmPassword" value={data.confirmPassword} placeholder="******************" onChange={handleChange} required  ></input>
          

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          
       </form>
    </div>
    )
}
export default Signup;
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate} from 'react-router-dom';
const Login=()=> {
    const [data,setData]=useState({
        username:'',
        password:''
    }
    
    )
    // console.log(data)
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setUsernameError('');
        setPasswordError('');
        
      
        try {
          const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded' // Set the Content-Type header
          },
           body: new URLSearchParams(data).toString()
          });
          const result = await response.json();
      
          if (response.ok) {
            alert(result.message);
            localStorage.setItem('token', result.token);
            navigate('/');
          } else {
            // Handle the error case
            
            if(result.error==="Invalid username"){
              setUsernameError('Invalid username')
            }
            else if (result.error === 'Invalid password'){
              setPasswordError('Invalid password')
            }
          }
      
          console.log(response);
        }catch (error) {
          console.error('Error submitting form:', error);
          
         
        }
      };
    
    
    const handleChange=(e)=>{
        setData((prevState)=>{
           return({ ...prevState, [e.target.name]:e.target.value })
        })
    }
    return (
      <div className=" container flex flex-col justify-center items-center bg-cover h-screen bg-[url('https://thumbs.dreamstime.com/b/different-spices-herbs-stone-table-top-view-ingredients-cooking-food-background-different-spices-herbs-black-120232209.jpg')]">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/12" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className={`shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${usernameError ? 'border-red-500' : ''}`}
              value={data.username}
              name="username"
              onChange={handleChange}
              placeholder="Username"
            />
            {usernameError && <p className="text-red-500 text-sm mt-1">{usernameError}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className={`shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${passwordError ? 'border-red-500' : ''}`}
              onChange={handleChange}
              name="password"
              value={data.password}
              placeholder="******************"
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <Link className="inline-block align-baseline text-sm font-normal text-red-500 hover:text-blue-800">
              Forgot Password?
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <p className=" font-light text-sm ">Don't have an account? </p>
            <Link to="/signup" key="register-link">
              <p className=" text-blue-500 ">Register</p>
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    );
}
export default Login




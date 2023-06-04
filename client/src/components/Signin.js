import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Signin() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 localStorage.setItem("authenticated", "false");


 async function handleSignin(e){
    e.preventDefault();
    try {
        const response = await fetch(`/users/signin`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }, 
          body: JSON.stringify({email:email,password:password})
        })

        if (response.status===200) {
          const userData = await response.json();
          localStorage.setItem("userData",userData);
          localStorage.setItem("authenticated","true");
          navigate("/");
        } else {
          throw new Error('Failed to fetch user details');
        }
      } catch (error) {
        console.error(error);
      }

 }

 return (
   <div className="flex items-center justify-center bg-transparent">
     <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-lg shadow-md">
       <h2 className="text-3xl font-bold text-center text-gray-300 mb-8">Sign In</h2>
       <form onSubmit={handleSignin}>
         <div>
           <label htmlFor="email" className="block text-gray-400 font-semibold mb-2">
             Email
           </label>
           <input
             type="text"
             id="email"
             name="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Enter your email"
             className="w-full border rounded-md py-2 px-3 text-gray-200 bg-gray-800 leading-tight focus:outline-none focus:border-blue-900 focus:shadow-outline-blue"
           />
         </div>
         <div className="mt-4">
           <label htmlFor="password" className="block text-gray-400 font-semibold mb-2">
             Password
           </label>
           <input
             type="password"
             id="password"
             name="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="Enter your password"
             className="w-full border rounded-md py-2 px-3 text-gray-200 bg-gray-800 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
           />
         </div>
         <div className="mt-8">
           <button
             type="submit"
             className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray"
           >
             Sign In
           </button>
         </div>
       </form>
     </div>
   </div>
 );
}

export default Signin;
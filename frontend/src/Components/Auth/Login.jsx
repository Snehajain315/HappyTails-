import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { Eye,EyeOff } from "lucide-react";
import Categories from "../../Pages/Categories";


export default function Login() { 
    
    let navigate= useNavigate();

    let [rememberMe,setRememberMe]= useState(false);
    let [email,setEmail]= useState('');
    let [password, setPassword]= useState('')
    let [showPassword,setShowPassword]= useState(false);


    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(email,password,rememberMe)

        try
        {
            let Res= await axios.post('http://localhost:5500/api/user/login',{
                email,password
            })

            if(Res.data.token)
            {
                localStorage.setItem('token', Res.data.token)
                localStorage.setItem('user',JSON.stringify(Res.data.user))
                console.log('User logged in successfully. Welcome Back,' + JSON.stringify(Res.data.user))
                navigate('/Categories')
            }
            else{
                alert(Res.data.message)
            }
        }catch(err)
        {
            console.error('Login error:',err)
            alert(err.response?.data?.message || 'Something went wrong! Check your API')
        }
    }


    return (
       
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-100 to-emerald-100">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 space-y-8 border border-emerald-100">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-emerald-600 mb-2">Welcome Back!</h1>
                    <p className="text-gray-500">Sign in to continue to Happy Tails</p>
                </div>
                
                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <div className="relative">
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                placeholder="Enter a valid email address" 
                                value={email}
                                required
                                onChange={(e)=>setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 placeholder-gray-400"
                            />
                        </div>
                    </div>
                    
                    {/* Password Input */}
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <a href="#" className="text-xs text-teal-600 hover:text-teal-500 font-medium">
                                Forgot password?
                            </a>
                        </div>
                        <div className="relative">
                            <input 
                                type={showPassword?'text': 'password'} 
                                name="password" 
                                id="password"
                                value={password}
                                placeholder="Enter Password" 
                                required
                                onChange={(e)=>setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 placeholder-gray-400"
                            />
                            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none absolute right-3 top-4"
                >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                        </div>

                    </div>
                    
                    {/* Remember Me Checkbox */}
                    <div className="flex items-center">
                        <input 
                            type="checkbox" 
                            name="rememberMe" 
                            id="rememberMe"
                            value={rememberMe}
                            onChange={(e)=>setRememberMe(e.target.checked)}
                            className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                        />
                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                            Remember me
                        </label>
                    </div>
                    
                    {/* Login Button */}
                    <div>
                        <button 
                            type="submit"
                            className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
                        >
                            Log In
                        </button>
                    </div>
                </form>
                
                {/* Sign Up Link */}
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <span className="font-medium text-teal-600 hover:text-teal-500 cursor-pointer" onClick={()=>navigate('/SignUp')}>
                            Sign up now
                        </span>
                    </p>
                </div>
                
            </div>
        </div>
    );
}
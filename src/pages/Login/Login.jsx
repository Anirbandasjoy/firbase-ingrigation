import React, { useContext, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { authContext } from '../../provider/Provider'
import Swal from 'sweetalert2'
const Login = () => {
    const { loginUser } = useContext(authContext);
    const [passwordShow, setPasswordShow] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                console.log("user Loged In succesfully");
                Swal.fire(
                    'Wellcome!',
                    'Logged in successfully',
                    'success'
                )
            })
            .catch((err) => {
                console.log(err.message);
                console.log("auth error")
            })
    }
    return (
        <div className='flex h-screen md:h-[80vh] items-center justify-center'>
            <form onSubmit={handleSubmit} className="card-body max-w-sm sm:max-w-md mx-auto  shadow-2xl">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type={passwordShow ? "password" : "text"} placeholder="password" className="input input-bordered" />
                    <span onClick={() => setPasswordShow(!passwordShow)}>
                        {
                            passwordShow ? <AiOutlineEyeInvisible size={20} className='absolute bottom-11 right-6 cursor-pointer' /> :
                                <AiOutlineEye size={20} className='absolute bottom-11 right-6 cursor-pointer' />
                        }

                    </span>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary capitalize">Login</button>
                    <p className='text-xs mt-3'>Not create Account? please <Link to="/register" className='text-lime-400 underline'>Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login
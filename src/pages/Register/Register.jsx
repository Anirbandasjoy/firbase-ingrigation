import React, { useContext, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { authContext } from '../../provider/Provider';
const Register = () => {
    const [passwordShow, setPasswordShow] = useState(true);
    const { registerUser } = useContext(authContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // user registation process
        registerUser(email, password)
            .then((userCredential) => {
                console.log(userCredential.user)
            })
            .catch((err) => [
                console.log(err.message)
            ])
    }
    return (
        <div className='flex h-screen md:h-[80vh] items-center justify-center'>
            <form onSubmit={handleSubmit} className="card-body max-w-sm sm:max-w-md mx-auto  shadow-2xl">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                </div>
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

                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary capitalize">Register</button>
                    <p className='text-xs mt-3'>Already Account? please <Link to="/login" className='text-lime-400 underline'>Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Register
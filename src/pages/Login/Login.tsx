import React from 'react'

type Props = {}

const Login = (props: Props) => {
    const loginHandle = (e: any) => {
        e.preventDefault();
        const email : string = e.target.email.value;
        const password : any = e.target.password.value;
        console.table(email, password)        
    }
    return (
    <div>
        <h2>Login</h2>
        <form onSubmit={loginHandle}>
            <label>Email address</label>
            <input type="email" name='email' placeholder='Email' />
            <label>Password</label>
            <input type="password" name='password' placeholder='Password' />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login
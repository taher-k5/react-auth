import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home/Home'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/about-us'>About Us</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
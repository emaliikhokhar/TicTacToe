import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="p-4 w-100 text-center fs-1 h-25 bg-dark text-white">
            <Link to="/" className="text-decoration-none text-white">Tik-Tac-Toe</Link>
        </div>
    )
}

export default Header

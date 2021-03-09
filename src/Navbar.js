import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/">
                <h1>The Dojo Blog</h1>
            </a>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar

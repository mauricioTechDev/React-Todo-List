import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return  (
    <header style={headerStyle}>
      <h1 style={headerStyle}>TodoList</h1>
      <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>Home</Link>
    </header>
  )
}


const headerStyle = {
  background: '#F2AE72',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header

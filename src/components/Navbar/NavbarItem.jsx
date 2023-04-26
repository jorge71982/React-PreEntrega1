import React from 'react'
import Nav from 'react-bootstrap/Nav';


const NavbarItem = ({item}) => {
  return (
    <div><Nav.Link href="#action1">{item}</Nav.Link></div>
  )
}

export default NavbarItem
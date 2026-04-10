import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { Navbar as BsNavbar, Container, Image } from 'react-bootstrap'

const Navbar = ({user}) => {

  return (
    <BsNavbar bg="dark" variant="dark">
            <Container fluid>
                <BsNavbar.Brand>Task Manager</BsNavbar.Brand>

                <div className="d-flex align-items-center gap-2 text-white">
                    {user?.img_path && (
                        <Image
                            src={user.img_path}
                            roundedCircle
                            width="40"
                            height="40"
                        />
                    )}
                    <span>{user?.name}</span>

                </div>
            </Container>
        </BsNavbar>
  )
}

export default Navbar
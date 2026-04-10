import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser, FaTasks, FaPlus, FaUsers, FaSignOutAlt } from 'react-icons/fa'

const AsideBar = ({ user }) => {

    const navigate = useNavigate()

    function handleLogout(){
        localStorage.removeItem('b69')
        navigate('/')
    }

    return (
        <>
            <div className="p-3">

            <h5 className="mb-4 text-primary">Menu</h5>
            <hr />
            <h6>{user.role}</h6>
            <hr />

            <ul className="nav flex-column gap-2">

                <li className="nav-item">
                    <Link className="nav-link text-dark d-flex align-items-center gap-2"  to="/protected/profile">
                    <FaUser />Profile</Link>
                </li>

                {/* USER MENU */}
                {user?.role === 'user' && (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2"  to="/protected/my-tasks">
                            <FaTasks />
                            
                            My Tasks</Link>
                        </li>
                    </>
                )}

                {/* ADMIN MENU */}
                {user?.role === 'admin' && (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2"  to="/protected/tasks">
                            <FaTasks />
                            All Tasks</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2"  to="/protected/create-task">
                            <FaPlus />
                            Create Task</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2"  to="/protected/users">
                            <FaUsers />
                            All Users</Link>
                        </li>
                    </>
                )}

                <li>
                    <button to="/" className=" btn btn-danger" onClick={handleLogout}>
                    <FaSignOutAlt />
                    Logout</button>
                </li>

            </ul>
            </div>

        </>
    )
}

export default AsideBar
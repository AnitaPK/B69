import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import AsideBar from '../components/AsideBar'
import Footer from '../components/Footer'
import axiosInstance from '../api/axiosInstance'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    const [user, setUser] = useState(null)

    async function fetchUser() {
        const res = await axiosInstance.get('/user/getUserInfo')
        if (res.data.success) {
            setUser(res.data.user)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    if (!user) return <h3>Loading...</h3>
    return (
        <>
            {/* 🔝 NAVBAR */}
            <Navbar user={user} />

            <div className='container-fluid mt-2'>
                <div className="row">

                    {/* 🧭 SIDEBAR */}
                    <div className="col-3 bg-light shadow-sm" style={{ height: '90vh' }}>
                        <AsideBar user={user} />
                    </div>

                    {/* 📄 MAIN CONTENT */}
                    <div className="col-9">
                        <div className="border rounded shadow-sm p-3 bg-white" style={{ minHeight: '90vh' }}>
                            <Outlet />
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Dashboard
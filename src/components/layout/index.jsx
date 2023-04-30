import React from "react";
import Sidebar from "../sidebar";
import { Outlet } from "react-router-dom";
import "../../components/layout/index.scss"

const Layout = () => {

    return (
        <div className="layout">
            <Sidebar />

            <Outlet />
        </div>
    )
}

export default Layout;

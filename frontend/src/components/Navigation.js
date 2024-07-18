import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import logo from "../static/logo.png";
import "../App.css";

const Navigation = () => {
  return (
    <div>
      <div className="sidebar" style={{padding:"20px",borderRadius:"10px"}}>
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" style={{borderRadius:"30px",backgroundColor:"#433D8B",color:"#fff"}}>
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            Navigation
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked" style={{color:"#fff"}}>
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/students" activeClassName="activeClicked" style={{color:"#fff"}}>
                <CDBSidebarMenuItem icon="list">
                  Students List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/manage" activeClassName="activeClicked" style={{color:"#fff"}}>
                <CDBSidebarMenuItem icon="user">
                  Manage Students
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </div>
  );
};

export default Navigation;

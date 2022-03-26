import React from "react";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import { Link } from "react-router-dom";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

function Sidebar() {
  return (
    <SideNav className="margin-sidenav" onSelect={(selected) => {}}>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="dashboard">
        <Link className="nav-btn" to="/dashboard">
          <NavItem eventKey="dashboard">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
            <NavItem eventKey="dashboard">
              <NavText>Dashboard</NavText>
            </NavItem>
          </NavItem>
        </Link>
        <Link className="nav-btn" to="/cars">
          <NavItem eventKey="charts">
            <NavIcon>
              <i className="fa fa-fw fa-truck" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Cars</NavText>
            <NavItem eventKey="cars/addcar">
              <NavText>Add Car</NavText>
            </NavItem>
          </NavItem>
        </Link>
      </SideNav.Nav>
    </SideNav>
  );
}

export default Sidebar;

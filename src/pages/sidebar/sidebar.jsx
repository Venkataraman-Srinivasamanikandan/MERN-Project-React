import { useState } from "react";
import { Link } from 'react-router-dom';

import { AiOutlineMenu } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import {
	Menu,
	MenuItem,
	ProSidebar,
	SidebarHeader,
	SubMenu,
} from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";

const SideNavigation = () => {
	const [collapsed, setCollapsed] = useState(false);
	// added styles 
	const styles = {
		sideBarHeight: {
			height: "100vh"
		},
		menuIcon: {
			float: "right",
			margin: "10px",
		},
	};
	const onClickMenuIcon = () => {
		setCollapsed(!collapsed);
	};
	return (
		<ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
			<SidebarHeader>
				<div style={styles.menuIcon} onClick={onClickMenuIcon}>
					<AiOutlineMenu />
				</div>
			</SidebarHeader>
			<Menu iconShape="square">
				<MenuItem icon={<MdDashboard />}><Link to="dashboard" /> Dashboard</MenuItem>
				<SubMenu title="CMS" icon={<HiOutlineDocumentReport />}>
					<MenuItem><Link to="metatag" /> Metatag Management</MenuItem>
					<MenuItem>Content Management</MenuItem>
					<MenuItem>Blog Management</MenuItem>
				</SubMenu>
			</Menu>
		</ProSidebar>
	);
};
export default SideNavigation;
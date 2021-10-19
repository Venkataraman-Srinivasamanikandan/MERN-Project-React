import React, { Component } from "react";
// import { ReactTable } from "react-table";
import "react-table/react-table.css";

import "./metatag.css";

class Metatag extends Component {
	constructor(props) {
		super(props);
		this.state = {
			islogged: false,
		};
	}

	render() {
		return (
			<p>Metatag management</p>
			// <ReactTable
			// 	PaginationComponent={{
			// 		"pageIndex": 2,
			// 		"pageSize": 10,
			// 		"pageCount": 10000,
			// 		"canNextPage": true,
			// 		"canPreviousPage": true
			// 	}}
			// 	data={[
			// 		{
			// 			firstName: "firstName",
			// 			lastName: "lastName",
			// 			age: "age",
			// 			status: "status",
			// 			visits: "visits"
			// 		}
			// 	]}
			// 	columns={[
			// 		{
			// 			Header: "First Name",
			// 			accessor: "firstName",
			// 			minWidth: 300
			// 		},
			// 		{
			// 			Header: "Last Name",
			// 			accessor: "lastName",
			// 			minWidth: 300
			// 		},
			// 		{
			// 			Header: "Age",
			// 			accessor: "age",
			// 			minWidth: 300
			// 		},
			// 		{
			// 			Header: "Status",
			// 			accessor: "status",
			// 			minWidth: 300
			// 		},
			// 		{
			// 			Header: "Visits",
			// 			accessor: "visits",
			// 			minWidth: 300
			// 		}
			// 	]}
			// />
			// <div
			// 	style={{
			// 		display: 'flex',
			// 		justifyContent: 'center',
			// 		alignItems: 'center',
			// 		height: '90vh'
			// 	}}
			// >
			// 	<h1>Metatag</h1>
			// </div>
		);
	}
}
export default Metatag;
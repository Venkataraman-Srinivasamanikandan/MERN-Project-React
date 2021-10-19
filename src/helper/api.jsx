import * as axios from "axios";

export default class Api {
	constructor() {
		this.client = null;
		this.api_url = "http://localhost:8001/api/v1";
	}

	init = () => {
		let headers = {
			Accept: "application/json",
		};
		this.client = axios.create({
			baseURL: this.api_url,
			timeout: 31000,
			headers: headers,
		});
		return this.client;
	};
	post = (url, data) => {
		return new Promise((resolve, reject) => {
			this.init().post(url, data).then((res) => {
				resolve({ status: true, data: res.data })
			}).catch((err) => {
				resolve({ status: false, data: err.response.data })
			})
		})
	};
}

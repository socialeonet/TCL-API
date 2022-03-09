const { username, password } = require('credentials.json');
const url_api = 'https://download.data.grandlyon.com/ws/rdata/';
const axios = require('axios');

const options = {
	auth: {
		username: username,
		password: password,
	},
};

const get_disruptions = async () => {
	const file = 'tcl_sytral.tclalertetrafic_2/all.json';

	const result = await axios.get(url_api + file, options);
	return result.data;
};

const get_all_bus_disruptions = async () => {
	const file = 'tcl_sytral.tclalertetrafic_2/all.json';

	const bus = [];

	const result = await axios.get(url_api + file, options);

    for (const attribute in result.data.values) {
        if (result.data.values[attribute].mode == 'Bus')
		    funiculaire.push(result.data.values[attribute]);
	}
	return bus;
};

const get_all_metro_disruptions = async () => {
	const file = 'tcl_sytral.tclalertetrafic_2/all.json';

	const metro = [];

	const result = await axios.get(url_api + file, options);

    for (const attribute in result.data.values) {
        if (result.data.values[attribute].mode == 'M\u00e9tro')
		    funiculaire.push(result.data.values[attribute]);
	}
	return metro;
};

const get_all_funiculaire_disruptions = async () => {
	const file = 'tcl_sytral.tclalertetrafic_2/all.json';

	const funiculaire = [];

	const result = await axios.get(url_api + file, options);

	for (const attribute in result.data.values) {
        if (result.data.values[attribute].mode == 'Funiculaire')
		    funiculaire.push(result.data.values[attribute]);
	}
	return funiculaire;
};

const get_all_tramway_disruptions = async () => {
	const file = 'tcl_sytral.tclalertetrafic_2/all.json';

	const tramway = [];

	const result = await axios.get(url_api + file, options);

	for (const attribute in result.data.values) {
        if (result.data.values[attribute].mode == 'Tramway')
		    funiculaire.push(result.data.values[attribute]);
	}
	return tramway;
};

const get_all_juniordirect_disruptions = async () => {
	const file = 'tcl_sytral.tclalertetrafic_2/all.json';

	const juniordirect = [];

	const result = await axios.get(url_api + file, options);

	for (const attribute in result.data.values) {
        if (result.data.values[attribute].mode == 'Junior Direct')
		    funiculaire.push(result.data.values[attribute]);
	}
	return juniordirect;
};

module.exports = {
	get_disruptions: get_disruptions,
	get_all_bus_disruptions: get_all_bus_disruptions,
	get_all_metro_disruptions: get_all_metro_disruptions,
	get_all_funiculaire_disruptions: get_all_funiculaire_disruptions,
	get_all_tramway_disruptions: get_all_tramway_disruptions,
	get_all_juniordirect_disruptions: get_all_juniordirect_disruptions,
};
<div id="header" align="center">
  <h1>
    TCL API
  </h1>
</div>
<div align="center">NodeJS module to interface with the Lyon's Public Transport (TCL) API</div><br />
This project was originally developed in order to be used with the TCL Discord/SMS project of Socialeo.<br />
Since there is none or a little number of project to interface with the TCL API, we made our NodeJS module public.<br />
Any contributions are welcome !

# Prerequesites

You have to get access to the "Alertes trafic du réseau des Transports en Commun Lyonnais - v2" on the Lyon's data website: https://data.grandlyon.com/jeux-de-donnees/alertes-trafic-reseau-transports-commun-lyonnais-v2/info<br />
Please note that the account you will have to register on the website will be use as the API credentials, so don't put anything too personnal in them.

# How to use it

Modify the credentials.json file to use your data.grandlyon.com's credentials.

Import the module using require:
```js
const grandlyon = require(path to tcl-api.js);
```
Use one of the functions described below.

# Functions
## get_disruptions
This function return the raw data from the API.<br />
Example : Get the number of bus disruptions
```js
const grandlyon = require("tcl-api.js");

const main = async () => {
    let bus = 0;
    const data = await grandlyon.get_disruptions();

    for (const attribute in data.values) {
        if (data.values[attribute].mode === 'Bus')
            bus++;
    }
    console.log("Number of bus disruptions: " + bus);
}

main();
```
## get_all_bus_disruptions
This function return all the bus disruptions<br />
Example : Get all the impacted lines name
```js
//We use a Set in this example in order to have unique values has a line might have mulitples disruptions.

const grandlyon = require("tcl-api.js");

const main = async () => {
	const data = await grandlyon.get_all_bus_disruptions();
	const impacted_lines = [];
	data.forEach(element => impacted_lines.push(element.ligne_cli));
	const human_impacted_lines = [...new Set(impacted_lines)];
	console.log(human_impacted_lines);
};

main();
```

## get_all_metro_disruptions
This function return all the metro disruptions<br />
Example: Get all the metro disruptions and the name of the disruption
```js
//We use a Set in this example in order to have unique values has a line might have mulitples disruptions.

const grandlyon = require("tcl-api.js");

const main = async () => {
    const data = await grandlyon.get_all_metro_disruptions();

    const impacted_lines = [];
    data.forEach(element => impacted_lines.push(element.ligne_cli + ':' + element.titre));
    const human_impacted_lines = [...new Set(impacted_lines)];
    console.log(human_impacted_lines);
}

main();
```

## get_all_funiculaire_disruptions
This function return all the funiculaire disruptions<br />
You may use one of the examples above

## get_all_tramway_disruptions
This function return all the tramway disruptions<br />
You may use one of the examples above

## get_all_juniordirect_disruptions
This function return all the junior direct disruptions
<br />
You may use one of the examples above

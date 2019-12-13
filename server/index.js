const express = require('express');
const axios = require('axios');
const cors = require('cors');

const REQUEST_DATA = {
	URL: 'https://i3gy725noe.execute-api.us-east-1.amazonaws.com/default/VisualizatorApi',
	HEADERS: {
		'x-api-key': '9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9'
	}
};

const app = new express();

app.use('/', cors());

// just a simple middleware for requesting
app.use('/', async (req, res, next) => {
	let result;

	try {
		result = await axios.get(REQUEST_DATA.URL, {headers: REQUEST_DATA.HEADERS});

		res.status(200).json(result.data);
	} catch (e) {
		res.status(500).write(e);
	} finally {
		next();
	}
});


app.listen(5000);

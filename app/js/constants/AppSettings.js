let AppSettings;

if (process.env.NODE_ENV === 'production') {
	AppSettings = require('./production.js');
} else {
	console.log('*************************************');
	console.log('Running app with DEVELOPMENT settings');
	console.log('*************************************');
	AppSettings = require('./development.js');
}

// AppSettings = require('./production.js');

export default AppSettings;

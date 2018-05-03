const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine(
	'handlebars',
	hbs({
		defaultLayout: 'main'
	})
);

app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controllers');
app.use(routes);

app.listen(PORT, function() {
	// Log (server-side) when our server has started
	console.log(`Server listening on: http://localhost: ${PORT}`);
});

import express  = require ('express');
var bodyParser = require('body-parser')
import { initRestRoutes } from './routes';

export class Server {

	private readonly _app: express.Application = express();

	public constructor() {
		this._app.use(bodyParser.urlencoded({ extended: true }))
		this._app.use(bodyParser.json())
		initRestRoutes(this._app);
	}

	public get app(): express.Application {
		return this._app;
	}
}

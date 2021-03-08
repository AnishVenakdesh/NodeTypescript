import { Router } from 'express';
import { registerController } from './registerController';

export class registerRoutes {
	private readonly _router: Router = Router();
	private readonly controller: registerController = new registerController();

	public constructor() {
	 	this.initRoutes();
	}

	public get router(): Router {
		return this._router;
	}

	private initRoutes() {
		this._router.post('/register',this.controller.register);
		this._router.get('/register',this.controller.userlist);
		// this._router.post('/login',this.controller.Login);	
	}
}
import { Router } from 'express';
import { IndexController } from './IndexController';

export class IndexRoutes {
	private readonly _router: Router = Router();
	private readonly controller: IndexController = new IndexController();

	public constructor() {
	 	this.initRoutes();
	}

	public get router(): Router {
		return this._router;
	}

	private initRoutes() {
		this._router.post('/getVantage',this.controller.Vantage);
		this._router.post('/getVantage',this.controller.Vintage);
		
	}
}

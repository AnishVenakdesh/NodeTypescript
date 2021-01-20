import { Router } from 'express';
import { IndexRoutes } from './controller/IndexRouter';


/**
 * Init Express api routes (Global)
 *
 * @param {Router} router
 * @param {string} prefix
 * @returns {void}
 */
export function registerApiRoutes(router: Router): void {
	router.use(`/`, new IndexRoutes().router);
	
	router.get(`/`, (function(req, res){res.json(Array({ status: 200,  message: 'success' }) );}));
}

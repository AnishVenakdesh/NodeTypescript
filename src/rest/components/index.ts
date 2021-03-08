import { Router } from 'express';
import { format } from 'url';
import { IndexRoutes } from './controller/IndexRouter';
import{registerRoutes } from './controller/registerRouter';


/**
 * Init Express api routes (Global)
 *
 * @param {Router} router
 * @param {string} prefix
 * @returns {void}
 */
export function registerApiRoutes(router: Router): void {
	router.use(`/`, new IndexRoutes().router);
	router.use(`/`, new registerRoutes().router);
	router.get(`/`, (function(req, res){res.json(Array({ status: 200,  message: 'success' }) );}));
}

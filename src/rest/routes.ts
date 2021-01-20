import { registerApiRoutes } from './components';

import { Router } from 'express';

/**
 * Init Express REST routes
 *
 * @param {Router} router
 * @returns {void}
 */
export function initRestRoutes(router: Router): void {
	
	registerApiRoutes(router);
}

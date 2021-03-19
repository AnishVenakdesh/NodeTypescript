import { createServer } from 'http';
import { Connection, getConnectionManager, getConnectionOptions,createConnection, getConnection, QueryRunner } from 'typeorm';
import { Server } from './rest/server';

(async function main() {	
	try {
		await createConnection().then(async connection => {


		}).catch(error => console.log(error));

		// Init express server
		const app = new Server().app;

		const server = createServer(app);
		
        // Start express server
        const port =8500
		server.listen(port);

		
		server.on('listening', () => {
			console.log('node server is listening on port in '+ port + '');
		});

		server.on('close', () => {
			('Server closed');
		});
	} catch (err) {
		console.log(err);
	}
})();

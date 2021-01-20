import { createServer } from 'http';
import { createConnection } from 'typeorm';
import { Server } from './rest/server';

(async function main() {
	try {
		await createConnection();

		// Init express server
		const app = new Server().app;

		const server = createServer(app);
		
        // Start express server
        var port =8080
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

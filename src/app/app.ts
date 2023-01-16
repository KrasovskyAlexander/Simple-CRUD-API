import { createServer } from 'node:http';

import handlers from '../handlers';


export const startServer = () => {
    const port: number = +process.env.PORT || 4000;

    const server = createServer(handlers);

    server.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });

    process.on('SIGINT', () => {
        server.close(() => process.exit());
    });
}

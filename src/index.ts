import { createServer } from 'node:http';

export const port: number = process.env.PORT || 4000;

const server = createServer(port);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
import { createServer } from 'node:http';

export const startServer = () => {
    const port: string = process.env.PORT || "4000";

    const server = createServer();

    server.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

import http from 'http';
const PORT = 80;

const startServer = async () => {
    try {
        const { app } = await import('./app/app');

        const server: http.Server = app.listen(PORT, () => {
            console.log(`App is running at http://localhost:${PORT}`);
        });
        process.on('SIGTERM', () => {
            server.close(() => {
                console.error('Closing http server.');
                process.exit(0);
            });
        });
    } catch (err) {
        console.error(`Error while starting server: ${err}`);
        process.exit(1);
    }
};

startServer();

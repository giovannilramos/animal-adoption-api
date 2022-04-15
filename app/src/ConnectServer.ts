import * as http from 'http';
import {App} from './App';
import {NextFunction, Request, Response} from 'express';
import {router} from "./Routes";
import {RouteNotFoundException} from "./Api/Exception/RouteNotFoundException";
import {errorMiddleware} from "./Api/Middleware/ErrorMiddleware";
import {manifestController} from "./Api";

const GRACEFUL_SHUTDOWN_TIME = 63 * 1000; /*Wait 63s*/
let HEALTH_CHECK_ENABLE = true;

export class ConnectServer {
    protected port: number;
    protected server: http.Server;

    constructor(private readonly application: App) {
        this.port = ConnectServer.normalizePort(Number(process.env.PORT) || 3000);

        this.registerRouter();

        this.server = http.createServer(this.application.app);

        /* Configuration based on ELB AWS 60s
         *  keepAliveTimeout > ELB AWS
         *  headersTimeout > keepAliveTimeout
         * */
        this.server.keepAliveTimeout = 61 * 1000;
        this.server.headersTimeout = 62 * 1000;
        this.server.maxHeadersCount = 0;
    }

    public startServer(): void {
        this.server.listen(this.port);
        this.server.on('error', this.onError);
        this.server.on('listening', () => console.log(`Server listing port ${this.port}`));
        this.processSignal();
    }

    private registerRouter(): void {
        this.application.app.get('/', (req: Request, res: Response, next: NextFunction) => {
            return manifestController.handle(req, res, next);
        });
        this.application.app.get('/is-alive', (req: Request, res: Response) => {
            return HEALTH_CHECK_ENABLE ? res.status(200).send('OK') : res.status(503).send('Service Unavailable');
        });
        this.application.app.use('/', router);
        this.application.app.use((req: Request, res: Response, next: NextFunction) => {
            next(new RouteNotFoundException());
        });
        this.application.app.use(errorMiddleware);
    }

    private gracefulShutdown(signal: string): void {
        HEALTH_CHECK_ENABLE = false;
        console.log(`Graceful shutdown application: ${signal} signal received.`);
        this.server.close(() => {
            setTimeout(async () => {
                process.exit();
            }, GRACEFUL_SHUTDOWN_TIME);
        });
    }

    private processSignal(): void {
        if (process.env.NODE_ENV === 'production') {
            process.on('SIGTERM', () => this.gracefulShutdown('SIGTERM'));
        }
    }

    private static normalizePort(value: number): number {
        if (isNaN(value)) return value;
        if (value >= 0) return value;
        throw new Error('PORT is undefined');
    }

    private onError(error: NodeJS.ErrnoException): void {
        if (error.syscall !== 'listen') throw error;
        const bind = typeof this.port === 'string' ? 'Pipe ' + this.port : 'Port ' + this.port;
        switch (error.code) {
            case 'EACCES':
                console.error(new Error(`${bind} requires elevated privileges`));
                break;
            case 'EADDRINUSE':
                console.error(new Error(`${bind} is already in use`));
                break;
            default:
                throw error;
        }
        process.exit(1);
    }
}
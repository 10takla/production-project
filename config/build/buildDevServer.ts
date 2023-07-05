import type { Configuration as DevServerOptions } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerOptions {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}

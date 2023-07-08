import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {DefinePlugin} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildPaths} from './types/config';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export function buildPlugins(paths: BuildPaths, isDev: boolean): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: true
        }),
    ];
    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: true
            })
        )
    }

    return plugins
}

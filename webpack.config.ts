import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default ({ mode }) => ({
  target: 'node',
  mode: mode === 'prod' ? 'production' : 'development',
  entry: {
    main: resolve(__dirname, 'src', 'index.ts'),
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.ts', '.js'],
  },
  module: {
    rules: [
        // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }
      ]
  },
});
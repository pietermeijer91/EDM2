import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { settings } from './config.js';
import './styles.css';

createRoot(document.getElementById('root')).render(<App {...settings} />);

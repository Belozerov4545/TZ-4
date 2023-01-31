import './styles.css';
import { Routes, Route } from 'react-router-dom';
import Folder from './components/Folder';
import explorer from './Data/folderData';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Folder explorer={explorer} />} />
    </Routes>
  );
}

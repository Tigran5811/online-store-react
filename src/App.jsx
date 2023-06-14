import { BrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import { DialogProvider } from './context/DialogsContext/DialogProvider';

const App = () => (
  <DialogProvider>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </DialogProvider>

);

export default App;

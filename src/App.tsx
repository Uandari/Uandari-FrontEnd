import router from '@routes/provider';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <main className="w-screen h-screen overflow-y-clip">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;

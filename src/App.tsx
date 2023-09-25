import router from '@routes/provider';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <main className="h-screen w-screen overflow-y-clip">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<LandingPage />} />
        {/* <Route  element={<LandingPage />} /> */}
      </Route>
    )
  );

  return (
    <main className="App">
      <RouterProvider router={router} />
    </main>
  );
}

function Root() {
  return (
    <main className="relative">
      {/* <Navbar /> */}
      <div>
        <Outlet />
      </div>
    </main>
  );
}

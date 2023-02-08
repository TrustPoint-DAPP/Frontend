import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DealPage from "./pages/DealPage/DealPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import NftPage from "./pages/NftPage/NftPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deal/:id" element={<DealPage />} />
        <Route path="/nft/:id" element={<NftPage />} />
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

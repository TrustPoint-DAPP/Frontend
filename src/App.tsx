import { ethers, Signer } from "ethers";
import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import OnlyAuthenticated from "./components/OnlyAuthenticated";
import OnlyUnauthenticated from "./components/OnlyUnauthenticated";
import { CHAIN_ID } from "./constants";
import { AuthContext } from "./context";
import { Celeb, Organization } from "./interfaces/Database";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import DealPage from "./pages/DealPage/DealPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Messages from "./pages/Messages/Messages";
import NftPage from "./pages/NftPage/NftPage";

export default function App() {
  const [account, setAccount] = useState<string | null>(null);
  const [signer, setSigner] = useState<Signer | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userType, setUserType] = useState<"ORG" | "CELEB" | null>(null);
  const [org, setOrg] = useState<Organization | null>(null);
  const [celeb, setCeleb] = useState<Celeb | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!(window as any).ethereum)
      return setError("Please install/update Metamask");
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum,
      "any"
    );
    // reload on network change
    provider.on("network", (newNetwork, oldNetwork) => {
      console.log(oldNetwork);
      console.log(newNetwork);
      if (oldNetwork) {
        window.location.reload();
      }
      if (newNetwork.chainId != CHAIN_ID) {
        setError("Incorrect network");
      }
    });

    setProvider(provider);
  }, []);

  useEffect(() => {
    if (!provider) return;
    (window as any).ethereum.removeAllListeners("accountsChanged");
    if (!signer) return;
    (window as any).ethereum.on("accountsChanged", (_account: any) => {
      window.location.reload();
    });
  }, [provider, signer]);

  // if (error) return <ErrorPage error={error} />;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={
      <Root />}>
        <Route index element={<OnlyUnauthenticated><LandingPage /></OnlyUnauthenticated>} />
        <Route path="/auth" element={<OnlyUnauthenticated> 
          <Auth />
          </OnlyUnauthenticated>} />
        <Route
          path="/dashboard"
          element={
            <OnlyAuthenticated>
              <Dashboard />
            </OnlyAuthenticated>
          }
        />
        <Route path="/deal/:id" element={<DealPage />} />
        <Route path="/nft/:id" element={<NftPage />} />
        <Route path="/messages" element={<Messages />} />
        <Route
          path="/discord"
          element={
            <p className="flex justify-center items-center h-screen text-5xl italic font-semibold">
              Discord coming soon...
            </p>
          }
        />
      </Route>
    )
  );

  return (
    <AuthContext.Provider
      value={{
        account,
        signer,
        token,
        userType,
        org,
        celeb,
        provider,
        setAccount,
        setSigner,
        setToken,
        setUserType,
        setOrg,
        setCeleb,
      }}
    >
      <main className="App">
        <RouterProvider router={router} />
      </main>
    </AuthContext.Provider>
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

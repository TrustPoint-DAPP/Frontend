import { useContext } from "react";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function OnlyAuthenticated({
  children,
}: {
  children: JSX.Element;
}) {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext.token) {
    navigate("/");
    return <></>;
  }

  return children;
}

import { useContext } from "react";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function OnlyUnauthenticated({
  children,
}: {
  children: JSX.Element;
}) {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (authContext.token) {
    navigate("/dashboard");
    return <></>;
  }

  return children;
}

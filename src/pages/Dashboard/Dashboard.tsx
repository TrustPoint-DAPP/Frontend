import React from "react";
import CelebrityDashboard from "./components/CelebrityDashboard";
import OrganizationDashboard from "./components/OrganizationDashboard";

export default function Dashboard() {
  const userType = 0; //0-> Game House  1-> Celebrity

  return userType ? <CelebrityDashboard /> : <OrganizationDashboard />;
}

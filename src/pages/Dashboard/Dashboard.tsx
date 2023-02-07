import React from "react";
import InfluencerDashboard from "./components/InfluencerDashboard";
import OrganizationDashboard from "./components/OrganizationDashboard";

export default function Dashboard() {
  const userType = 0; //0-> Game House  1-> Influencer

  return userType ? <InfluencerDashboard /> : <OrganizationDashboard />;
}

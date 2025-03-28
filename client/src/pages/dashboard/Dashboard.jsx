import "regenerator-runtime/runtime";
import React, { useEffect, useLayoutEffect } from "react";
import "../../global.css";

import CreateCardsSection from "./components/CreateCardsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import { Grid } from "@mui/material";
import TitleText from "../../components/texts/TitleText";
import RegularText from "../../components/texts/RegularText";
import { getOrganisations } from "../../api/api.service";
import { create } from "ipfs-http-client";

const TitleSectionWrapperStyle = {
  gap: "12px",
  justifyContent: "center",
  flexDirection: "column",
  "h6:first-of-type": {
    lineHeight: "41px",
  },
  "h6:last-of-type": {
    lineHeight: "27px",
  },
};

const Dashboard = () => {
  useLayoutEffect(() => {
    if (
      window.walletConnection.isSignedIn() &&
      !document.cookie.includes("privateKey") &&
      !document.cookie.includes("userId")
    ) {
      document.cookie = `privateKey = ${localStorage.getItem(
        `near-api-js:keystore:${window.walletConnection._authData.accountId}:${walletConnection._networkId}`
      )}`;
      document.cookie = `userId = ${window.accountId}`;
    }
  }, []);

  useEffect(() => {
    (async function () {
      const res = await getOrganisations();
      localStorage.setItem("organisation", res?.[0]?.registryNumber);
    })();
  }, []);

  return (
    <Grid container gap={"29px"} sx={{ paddingTop: "43px" }}>
      <Grid container sx={TitleSectionWrapperStyle}>
        <TitleText title={"Dashboard"} variant="big" />
      </Grid>
      <HowItWorksSection />
      <CreateCardsSection />
    </Grid>
  );
};

export default Dashboard;

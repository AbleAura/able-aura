import React from "react";
import Layout from "../components/Layout";
import InviteFriends from "../components/invite/InviteFriends";
import HowItWorks from "../components/invite/HowItWorks";

const Signin = () => {
  return (
    <Layout>
      <InviteFriends />
      <HowItWorks />
    </Layout>
  );
};

export default Signin;

import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/home/Hero";
import TopBar from "../components/TopBar";
import ChangingFuture from "../components/home/ChangingFuture";
import BecomeInsider from "../components/home/BecomeInsider";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TopBar />
      <ChangingFuture />
      <TopBar />
      <BecomeInsider />
    </Layout>
  );
};

export default Index;

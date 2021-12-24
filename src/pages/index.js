import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/home/Hero";
import ChangingFuture from "../components/home/ChangingFuture";
import BecomeInsider from "../components/home/BecomeInsider";

const Index = () => {
  return (
    <Layout>
      <main
        style={{
          boxShadow:
            "-1px -10px 14px -6px #FFFFFF, 5px 10px 12px -5px rgba(0, 0, 0, 0.19)",
        }}
      >
        <Hero />
        <ChangingFuture />
        <BecomeInsider />
      </main>
    </Layout>
  );
};

export default Index;

import React from "react";
import Container from "./components/Container/Container";
import Layout from "./components/Layout/Layout";
import Videos from "./components/Pages/Videos"
const App = () => {
  return (
    <div>
      <Container>
        <Layout><Videos></Videos></Layout>
      </Container>
    </div>
  );
};

export default App;

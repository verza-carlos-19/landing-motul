import ContainerProds from "./Components/ContainerProds/ContainerProds";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <ContainerProds />
      </Layout>
      <Footer />
    </>
  );
}

export default App;

import { Container } from "react-bootstrap";

import { Outlet } from "react-router-dom";

import Header from "./components/panels/header/header.component";
import Footer from "./components/panels/footer/footer.component";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;

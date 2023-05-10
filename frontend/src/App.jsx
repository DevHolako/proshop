import { Container } from "react-bootstrap";

import Header from "./components/panels/header/header.component";
import Footer from "./components/panels/footer/footer.component";
import Home from "./pages/home/home.page";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Home></Home>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;

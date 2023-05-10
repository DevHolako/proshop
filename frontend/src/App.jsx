import { Container } from "react-bootstrap";

import Header from "./components/panels/header/header.component";
import Footer from "./components/panels/footer/footer.component";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;

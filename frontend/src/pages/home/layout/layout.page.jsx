import { Container } from "react-bootstrap";
import Footer from "../../../components/panels/footer/footer.component";
import Header from "../../../components/panels/header/header.component";
import { Outlet } from "react-router-dom";

export default function Layout() {
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
}

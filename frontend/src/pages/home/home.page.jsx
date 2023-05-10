import { Row, Col } from "react-bootstrap";
import products from "../../data/products.data";
import Product from "../../components/product/product.component";

const Home = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} key={product._id} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;

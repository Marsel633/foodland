import "./App.css";
import {
  Distributors,
  Footer,
  HomePage,
  News,
  ProductCategories,
  RecommendedProducts,
  TheyTrustUs,
  WeHelping,
  WhyChooseUs,
} from "./modules";

function App() {
  return (
    <>
      <HomePage />
      <WeHelping />
      <ProductCategories />
      <WhyChooseUs />
      <Distributors />
      <RecommendedProducts />
      <TheyTrustUs />
      <News />
      <Footer />
    </>
  );
}

export default App;

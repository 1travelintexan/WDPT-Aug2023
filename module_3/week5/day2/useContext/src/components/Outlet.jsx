import Footer from "./Footer";
import Header from "./Header";

function Outlet({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default Outlet;

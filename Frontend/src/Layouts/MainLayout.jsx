import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

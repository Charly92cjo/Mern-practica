import Navigation from "../Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <h2>Footer</h2>
    </>
  );
};

export default Layout;

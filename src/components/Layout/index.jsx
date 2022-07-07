import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="structure">
        <div className="side">
          <Sidebar />
        </div>
        <section className="main">{children}</section>
      </div>
    </>
  );
};

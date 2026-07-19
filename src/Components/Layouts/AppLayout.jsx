import { Outlet, ScrollRestoration } from "react-router";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;

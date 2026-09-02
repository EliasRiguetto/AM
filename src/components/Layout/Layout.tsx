import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({ children}: LayoutProps ) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

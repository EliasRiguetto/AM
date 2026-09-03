import { Header } from './../components/Header'
import { Footer } from "./../components/Footer";
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

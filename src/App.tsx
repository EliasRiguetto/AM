import "./styles/variables.css";
import "./styles/global.css";
import { SmoothScroll } from "./components/SmoothScroll";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./templates/Layout";
import { Home } from "./templates/Home";
import { Contact } from "./templates/Contact";
import { Areas } from "./templates/Areas";
import { About } from "./templates/About";

import { PageTransition } from "./components/PageTransition";

export function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <Layout>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </PageTransition>
      </Layout>
    </BrowserRouter>
  );
}

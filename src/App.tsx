import "./styles/variables.css";
import "./styles/global.css";
import { Layout } from './templates/Layout'
import {Home} from './templates/Home';
import { Contact } from "./templates/Contact";
import { Areas } from "./templates/Areas";
import { About } from "./templates/About";


export function App() {
  return (
    <Layout>
      <About/>
    </Layout>
  );
}


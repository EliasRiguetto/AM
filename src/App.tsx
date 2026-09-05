import "./styles/variables.css";
import "./styles/global.css";
import { Layout } from './templates/Layout'
import {Home} from './templates/Home';
import { Contact } from "./templates/Contact";


export function App() {
  return (
    <Layout>
      <Contact/>
    </Layout>
  );
}

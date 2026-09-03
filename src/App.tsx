import "./styles/variables.css";
import "./styles/global.css";
import { Layout } from './templates/Layout'
import {Home} from './templates/Home';


export function App() {
  return (
    <Layout>
      <Home/>
    </Layout>
  );
}

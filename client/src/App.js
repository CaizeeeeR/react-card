import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import { words } from "./wordsFile.js";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>{words.content}</main>
      <Footer />
    </div>
  );
}

export default App;

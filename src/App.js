import Home from "./Pages/Home";
import About from "./Pages/About";
import NoMatch from "./Pages/NoMatch";
import Posts from "./Pages/Posts";
import PostLists from "./Pages/PostLists";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LayoutDefault from "./layout/LayoutDefault";

function App() {
  return (
    <BrowserRouter>
      <LayoutDefault>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />}>
            <Route index element={<PostLists />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </LayoutDefault>
    </BrowserRouter>
  );
}

export default App;

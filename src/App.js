import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Githubcodeopen from "./pages/Githubcodeopen";
import Githubrepo from "./pages/Githubrepo";
import GithubUser from "./pages/GithubUser";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/githubrepo":
        title = "";
        metaDescription = "";
        break;
      case "/githubuser":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Githubcodeopen />} />

      <Route path="/githubrepo" element={<Githubrepo />} />

      <Route path="/githubuser" element={<GithubUser />} />
    </Routes>
  );
}
export default App;

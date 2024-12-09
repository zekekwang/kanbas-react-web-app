import { Link } from "react-router-dom";
import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    // <div>
    //   <ul>
    //     <li><Link to="/Labs">Labs</Link></li>
    //     <li><Link to="/Labs/Lab1">Lab 1</Link></li>
    //     <li><Link to="/Labs/Lab2">Lab 2</Link></li>
    //     <li><Link to="/Labs/Lab3">Lab 3</Link></li>
    //     <li><Link to="/Kanbas">Kanbas</Link></li>
    //   </ul>
    //   <a href="https://github.com/zekekwang/kanbas-react-web-app/tree/a1"
    //     id="wd-github" target="_blank" rel="noopener noreferrer">Github</a>
    // </div>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a id="wd-a" href="#/Labs" className="nav-link">
          Labs
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a1" href="#/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
          Lab 1
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a2" href="#/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
          Lab 2
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a3" href="#/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
          Lab 3
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a3" href="#/Labs/Lab4"
          className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
          Lab 4
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a3" href="#/Labs/Lab5"
          className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>
          Lab 5
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="#/Kanbas" className="nav-link">
          Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/zekekwang/kanbas-react-web-app/" className="nav-link">
          My GitHub
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/zekekwang/kanbas-react-web-app/tree/a6" className="nav-link">
          GitHub-react-repo
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/zekekwang/kanbas-node-server-app/tree/a6" className="nav-link">
          GitHub-node-repo
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://kanbas-node-server-app-a6-h3dh.onrender.com" className="nav-link">
          render-server
        </a>
      </li>
    </ul>
  );
}



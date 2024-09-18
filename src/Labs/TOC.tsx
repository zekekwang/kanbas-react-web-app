import { Link } from "react-router-dom";
export default function TOC() {
    return (
        <div>
                  <ul>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
        <li><Link to="/Kanbas">Kanbas</Link></li>
      </ul>
      <a href="https://github.com/zekekwang/kanbas-react-web-app/tree/a1"
      id="wd-github" target="_blank" rel="noopener noreferrer">Github</a>
        </div>

    );
  }
  
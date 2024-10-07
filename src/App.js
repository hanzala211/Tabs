import { useState } from "react";
import "./styles.css";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    color: "#ffcb03",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    color: "#5ec576",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    color: "#ff585f",
  },
];
export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div
        className="circle"
        style={{ background: `${content[activeTab].color}` }}
      ></div>
      <div className="wholeDiv">
        <div className="buttonDiv">
          {Array.from({ length: content.length }, (_, i) => (
            <button
              className={activeTab === i ? "active" : ""}
              style={{ marginRight: "10px" }}
              key={i}
              onClick={() => setActiveTab(i)}
            >
              Tab {i + 1}
            </button>
          ))}
        </div>
        <TabContainer key={activeTab} item={content[activeTab]} />
      </div>
    </>
  );
}
function TabContainer({ item }) {
  return (
    <div className="tab-content">
      <h3>{item.summary}</h3>
      <p>{item.details}</p>
    </div>
  );
}

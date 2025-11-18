import React, { useContext, useEffect, useRef } from 'react';
import { ToolsContext } from '../contexts/ToolsContext';

export default function Boot_Tools() {

  const { ButtonLoop, setActiveFilter, activeFilter } = useContext(ToolsContext);

  const allBtnRef = useRef(null);

  useEffect(() => {
    if (allBtnRef.current) {
      allBtnRef.current.focus();
      setActiveFilter("All");
    }
  }, []);

  return (
    <div>
      <button
        ref={allBtnRef}
        onClick={() => setActiveFilter("All")}
        className={`px-2 py-1 text-sm rounded-2xl font-abhaya
        ${activeFilter === "All" ? "bg-background-dark dark:text-text dark:bg-background text-text-dark" : "text-text dark:text-text-dark"}`}
      >
        All
      </button>

      {ButtonLoop.map((cat) => (
        <button
          onClick={() => setActiveFilter(cat)}
          key={cat}
          className={`px-2 py-1 text-sm rounded-2xl font-abhaya
          ${activeFilter === cat ? "bg-background-dark dark:text-text dark:bg-background text-text-dark" : "text-text dark:text-text-dark"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

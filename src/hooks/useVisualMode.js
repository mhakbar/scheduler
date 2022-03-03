import React, {useState} from "react";


export default function useVisualMode(initialMode) {

  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  function transition(newMode, replace) {
    setMode(newMode);
    replace || setHistory(prev => [...prev, newMode])
  };

  function back() {
    if (history.length < 2) {
      return
    }
    const newHistory = history.slice(0, -1)
    setHistory(newHistory)
    setMode(newHistory[newHistory.length - 1])

  }

  
return {mode, transition, back};

};
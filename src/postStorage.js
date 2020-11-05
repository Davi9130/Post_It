import React from "react";

export const PostContext = React.createContext();

export const PostStorage = ({ children }) => {
  const [lembrete, setLembrete] = React.useState("");

  const memoriaLocal = localStorage.getItem("lembrete");

  if (lembrete !== "") {
    if (memoriaLocal === "") {
      localStorage.setItem("lembrete", JSON.stringify(lembrete));
    } else {
      localStorage.setItem("lembrete", JSON.stringify(lembrete, memoriaLocal));
    }
  } else if (memoriaLocal === null) {
    localStorage.setItem("lembrete", "");
  }

  return (
    <PostContext.Provider value={{ lembrete, setLembrete }}>
      {children}
    </PostContext.Provider>
  );
};

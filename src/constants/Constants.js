import { useState } from "react";
export const Constants = () => {
  const [title, setTitle] = useState("");
  const [titleDescription, setTitleDescription] = useState("");
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [popular, setPopular] = useState([]);
  const [valorDesdeHijo, setValorDesdeHijo] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [btt, setBtt] = useState(false);
  return {
    title,
    setTitle,
    titleDescription,
    setTitleDescription,
    error,
    setError,
    text,
    setText,
    data,
    setData,
    id,
    setId,
    popular,
    setPopular,
    valorDesdeHijo,
    setValorDesdeHijo,
    dislikes,
    setDislikes,
    btt,
    setBtt,
  };
};

import { Constants } from "../constants/Constants.js";
const handler = () => {
  //Declare the variables
  const {
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
  } = Constants();
  const handleOnClick = (e) => {
    e.preventDefault();

    //Check if the fields are empty
    //If they are empty, set the error message  and return
    if (!title || !titleDescription || !text) {
      setError("Please fill all the fields");
      return;
    } else {
      //If the fields are not empty, set the data and clear the fields
      //Set the data to the state and clear the fields
      setError("");
      setId(id + 1);
      setData([
        ...data,
        { title, titleDescription, text, valorDesdeHijo, dislikes, id },
      ]);
      setTitle("");
      setTitleDescription("");
      setText("");
      //console.log("id out", id);
      // console.log("id dislikes", dislikes);
    }
  };
  return {
    title,
    setTitle,
    titleDescription,
    setTitleDescription,
    error,
    text,
    setText,
    data,
    valorDesdeHijo,
    setValorDesdeHijo,
    dislikes,
    setDislikes,
    handleOnClick,
  };
};
export default handler;

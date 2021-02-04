import axios from "axios";
const baseUrl = "https://cookbook-lambda.herokuapp.com";

export const fetchRecipes = async () => {
  const url = `${baseUrl}/recipes`; 
  const token = localStorage.getItem("token");
  
  console.log(token);
  const res = await axios.get(url, {
    headers: {
      Authorization: token,
    },
  }).then((res) => {
    console.log(res)
  });
  console.log(res.data);
  return res.data;
};

import axios from "axios";
const baseUrl = "https://cookbook-lambda.herokuapp.com";

export const getRecipes = async () => {
    const url = `${baseUrl}/recipes`;
    const token = localStorage.getItem("token");

    axios.get(url, {
          headers: {
              Authorization: token,
          },
      }).then((res) => {
          return res.data
      }).catch((error) => {
          return error
      });
};

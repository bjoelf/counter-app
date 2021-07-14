
const apiAdress = "https://localhost:44386/api/";

export default function getProducts() {
    console.log("api getProducts");
    return fetch(apiAdress + "Api/").then((data) => data.json());
  }

  
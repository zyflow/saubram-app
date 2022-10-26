import axios from "axios";

const url =
  process.env.REACT_APP_URL ??
  "https://mysterious-brushlands-71958.herokuapp.com";

export function postData(data) {
  console.log("data service", url);
  const config = {
    method: "post",
    url: url + "/api/data",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log("ir ok ", JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log("nav ok ");
      console.log(error);
    });
}

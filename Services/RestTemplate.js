const url =
  process.env.REACT_APP_URL ??
  "https://mysterious-brushlands-71958.herokuapp.com";

export async function post(method, body, token, skipContentType) {
  let tokens = localStorage.getItem("token");

  const basicHead = {
    Authorization: `Bearer ${tokens}`,
  };

  if (!skipContentType) {
    basicHead["Content-Type"] = "application/json";
  }

  const pageRes = await fetch(url + method, {
    method: "post",
    headers: basicHead,
    body: body,
  });

  return pageRes;
}

export async function put(method, body, token, skipContentType) {
  let tokens = localStorage.getItem("token");

  const basicHead = {
    Authorization: `Bearer ${tokens}`,
  };

  if (!skipContentType) {
    basicHead["Content-Type"] = "application/json";
  }

  const pageRes = await fetch(url + "/api/data" + method, {
    method: "put",
    headers: basicHead,
    body: body,
  });

  return pageRes;
}

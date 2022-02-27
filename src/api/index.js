export const postRequest = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return response.json()
}

export const getRequest = (url = "") => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err)
}

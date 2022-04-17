export const getTrendingjobpost = () => {
  return fetch("/api/get-trending-job", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

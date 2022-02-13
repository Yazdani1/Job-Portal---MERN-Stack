//to save job to wishlist

export const savejobtoWishlist = (postID) => {
  return fetch("/api/create-job-post", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(postID),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

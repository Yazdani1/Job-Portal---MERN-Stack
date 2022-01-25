export const getallJobsinhomepage = () => {
    return fetch("/api/getall-jobposts", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
};
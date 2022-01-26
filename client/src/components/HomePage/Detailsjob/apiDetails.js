export const getdetailsJob = (id) => {
    return fetch("/api/job-description/" + id, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
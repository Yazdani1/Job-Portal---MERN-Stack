//to get all the job posts
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

//search job post

export const searchJobpost = (query) => {
  return fetch("/api/search-jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(query),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//to get all the user info

export const getallUserlist = () => {
  return fetch("/api/all-user-list", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//to get limited user list for home page

export const getlimiteduserlist = () => {
  return fetch("/api/user-limit-list", {
    method: "GET",
  })
    .then((res) => {
      res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

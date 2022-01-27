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



  //apply job

  export const applytothisjobs = (applyjobs) => {
    return fetch("/api/apply-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(applyjobs),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //my applied jobs list


  export const myappliedjobs = (myjobsapply) => {
    return fetch("/api/getmy-appliedjobs-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(myjobsapply),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
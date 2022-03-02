//to create employee list

export const addEmployee = (employee) => {
  return fetch("/api/create-employer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(employee),
  });
};

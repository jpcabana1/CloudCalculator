fetch("http://localhost:8080/api/Operation", {
  method: "POST",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    propA: "6",
    propOperation: "+",
    propB: "4",
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });

fetch("http://localhost:8080/api/Operation")
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });

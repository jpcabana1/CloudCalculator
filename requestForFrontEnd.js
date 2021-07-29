fetch("http://localhost:8080/api/Operation", {
  method: "POST",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    propOperation: "(500 + 50) / 2",
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

const expression = "(500 + 50) / 2";

const obj = {
  operationData: expression + " = " + eval(expression),
  dateOperation: new Date(),
};

console.log(
  "\nexpression: " + obj.operationData + "\nDate: " + obj.dateOperation + "\n"
);

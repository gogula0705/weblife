function hello1() {
  console.log("Expensive code of team1");
}

function hello1copy() {
  console.log("Expensive code of copy team1");
}

let item = { hello1, hello1copy };
export default item;

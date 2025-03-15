async function fun() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    console.log(data);
    // data.map((ele) => console.log(ele.title));

    main.innerHTML = data
      .map((ele, index) => {
        return `
            <div class ="Items">
                <img src = '${ele.image}'/>
                <h1>${ele.title.slice(0, 25)}</h1>
                <p>${ele.category}</p>
                <p>$${ele.price}</p>
                <button>click here<button>
            </div>
        `;
      })
      .join("");
  } catch (err) {
    console.log("error occurred");
  }
}
fun();

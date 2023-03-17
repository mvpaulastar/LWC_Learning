import { LightningElement, track } from "lwc";

export default class RandomNorris extends LightningElement {
  isSubmitted = false; //submit button
  joke = ""; //joke to fetch
  numberInput;
  selectInput = "animal";
  categoryList = [];
  dataLoaded = false;

  handleSelectChange(event) {
    this.selectInput = event.target.value;
  }

  //submit button
  async submitHandler(e) {
    e.preventDefault();
    this.isSubmitted = true;
    const data = await fetchData(
      `https://api.chucknorris.io/jokes/random?category=${this.selectInput}`
    );

    this.joke = data.value;
  }

  //Load categories
  async connectedCallback() {
    const categories = await fetchData(
      `https://api.chucknorris.io/jokes/categories`
    );
    this.categoryList = categories.filter((category) => {
      return !(category === "explicit" || category === "political");
    });
    this.dataLoaded = true;
  }
}

//Fetch
async function fetchData(url) {
  try {
    const response = await fetch(url, { method: "GET" });
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}

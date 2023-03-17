import { LightningElement } from "lwc";

export default class RandomFacts extends LightningElement {
  isSubmitted = false; //submit button
  fact = ""; //fact to fetch
  numberInput;
  selectInput = "trivia";

  handleInputChange(event) {
    this.numberInput = event.target.value;
  }

  handleSelectChange(event) {
    this.selectInput = event.target.value;
  }

  //submit button
  async submitHandler(e) {
    e.preventDefault();
    this.isSubmitted = true;
    const data = await fetchData(
      `http://numbersapi.com/${this.numberInput}/${this.selectInput}?json`
    );

    this.fact = data.text;
  }
}

//Fetch
async function fetchData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}

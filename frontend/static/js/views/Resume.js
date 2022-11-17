import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Resume");
  }

  async getHtml() {
    return `
        <h1>Resume</h1>
        <p>Resume details</p>
    `;
  }
}

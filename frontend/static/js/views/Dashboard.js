import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
        <h1>Dashboard</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquid temporibus expedita facilis id saepe necessitatibus voluptatem, placeat alias odit autem voluptates. 
            Quia totam dolor, sint voluptates iste temporibus? Corrupti, praesentium.
        </p>
        <p>
          <a href="/posts" data-link>View recent posts</a>
        </p>
        `;
  }
}

class HalfHorizontalLine extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <hr class="border-gray-400 w-1/2 translate-x-1/2" />
    `;
	}
}

customElements.define('g-hr-half', HalfHorizontalLine);

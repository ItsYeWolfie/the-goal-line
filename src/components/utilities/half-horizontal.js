class HalfHorizontalLine extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
			<style>
				.horizontal-line-half {
					@apply border-gray-400 w-1/2 translate-x-1/2;
				}
			</style>
			<hr class="horizontal-line-half" />
		`;
	}
}

customElements.define('g-hr-half', HalfHorizontalLine);

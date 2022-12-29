class NavIcon extends HTMLElement {
	constructor() {
		super();
		this.title = this.getAttribute('title');
		this.icon = this.getAttribute('icon');
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
			<a
				class="${
					this.icon
				} text-lg cursor-pointer hover:text-sky-600 transition-colors duration-500"
				${this.href ? `href="${this.href}"` : ''}
			>
				<span class="sr-only">${this.title}</span>
			</a>
		`;
	}
}

customElements.define('g-nav-icon', NavIcon);

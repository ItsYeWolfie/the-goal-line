class NavIconHolder extends HTMLElement {
  constructor() {
    super();
    console.log(this.children);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
			<div class="flex flex-col gap-8 text-xs text-gray-400 ${this.classList}">
				${this.innerHTML}
			</div>
		`;
  }
}

customElements.define('g-nav-icon-holder', NavIconHolder);

class NavItem extends HTMLElement {
  constructor() {
    super();
    this.href = this.getAttribute('href');
    this.icon = this.getAttribute('icon');
    this.iconAlt = this.getAttribute('icon-alt');
    this.title = this.getAttribute('title');
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a
      class="flex items-center transition-colors duration-500 hover:text-sky-600"
      href="${this.href}"
    >
      <i class="${this.icon} text-2xl">
        <span class="sr-only">${this.iconAlt}</span>
      </i>
      <span class="ml-2 text-sm">${this.title}</span>
    </a>
  `;
}
}

customElements.define('g-nav-item', NavItem);

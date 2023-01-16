import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LitLightElement } from '../../lib/LitElement';
import { fetchData } from '../../lib/helpers/Fetch';

@customElement('team-players')
class TeamPlayers extends LitLightElement {
	async connectedCallback() {
		super.connectedCallback();
		const players = await fetchData('https://api.npoint.io/14ad36c662462a142566');
		console.log(players);
	}

	render() {
		return html``;
	}
}

export default TeamPlayers;

/* eslint-disable */
import { LitElement, unsafeCSS } from 'lit';
import fontawesome from '@fortawesome/fontawesome-free/css/all.min.css?inline';
import tailwind from '../style.css?inline';

export class LitLightElement extends LitElement {
	static styles = [unsafeCSS(fontawesome), unsafeCSS(tailwind)];
}

import { html } from 'lit';

export function RenderLoadingCells(times = 1, side: 'left' | 'center' = 'left') {
	return Array(times)
		.join(' ')
		.split(' ')
		.map(() => {
			return html`
				<td class="py-2 pl-3 text-left">
					<div
						class="${side === 'left'
							? 'text-left'
							: 'text-center mx-auto'} h-4 w-8 animate-pulse rounded-full bg-gray-500"
					></div>
				</td>
			`;
		});
}

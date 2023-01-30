import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
import './StatisticsTable';

class Overview extends LitLightElement {
	static properties = {
		response: { type: Array },
		loading: { type: Boolean },
	};

	constructor() {
		super();
		this.response = [];
		this.loading = true;
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/20e47a2ad154855b5fcb');
		const data = await response.json();
		this.response = data;
		this.loading = false;
		console.log(data);
	}

	render() {
		if (this.loading) {
			return html`
				<div
					class="flex h-10 w-full justify-center text-center text-white rounded-md bg-gray-800  "
				>
			   <h1>Loading ...</h1>
				</div>
			`;
		}
		return html`<div
			class=""
		>
			
							
			<div class="flex-col top-0 w-full place-self-start bg-gray-800 p-6 ">
                
				<h1 class="ml-6 flex-col rounded-xl text-sky-600 text-sm pb-4">PLAYER DETAILS</h1>

                <div class="flex justify-between">
                    <div >
                        <img
                                class=" rounded-full ml-6 "
                                src="${this.response.response[0].player.photo}"
                                
                        />
                    </div>
                    <div class="flex-col ">
                        <div class="flex pb-4">
                                <div class="flex-col rounded-xl  text-white text-xl pr-12"> 
                                    <h1 class="text-gray-400 text-sm ">NAME</h1>
                                    ${this.response.response[0].player.name}  
                                </div>
                                <div class="flex-col rounded-xl text-white text-xl"> 
                                    <h1 class="text-gray-400 text-sm">LASTNAME</h1>
                                    ${this.response.response[0].player.lastname}  
                                </div>

                        </div>
                        <div class="flex pb-4">
                                <div class="flex-col rounded-xl text-white text-xl pr-24"> 
                                    <h1 class="text-gray-400 text-sm">AGE</h1>
                                    ${this.response.response[0].player.age}  
                                </div>
                                <div class="flex-col rounded-xl text-white text-xl pr-24"> 
                                    <h1 class="text-gray-400 text-sm">HEIGHT</h1>
                                    ${this.response.response[0].player.height}  
                                </div>
                                <div class="flex-col rounded-xl text-white text-xl pr-4"> 
                                    <h1 class="text-gray-400 text-sm">WEIGHT</h1>
                                    ${this.response.response[0].player.weight}  
                                </div>
    
                        </div>


                        <div class="flex">
                                <div class="flex-col rounded-xl text-white text-xl pr-4"> 
                                    <h1 class="text-gray-400 text-sm">BIRTHDATE</h1>
                                    ${this.response.response[0].player.birth.date}  
                                </div>
                                <div class="flex-col rounded-xl text-white text-xl pr-4"> 
                                    <h1 class="text-gray-400 text-sm">BIRTHPLACE</h1>
                                    ${this.response.response[0].player.birth.place}  
                                </div>
                                <div class="flex-col rounded-xl text-white text-xl pr-4"> 
                                    <h1 class="text-gray-400 text-sm">NATIONALITY</h1>
                                    ${this.response.response[0].player.nationality}  
                                </div>
    
                        </div>
                         
                    </div>

                    <div>
                

                </div>
            
			 </div>
			
			</div>
            <statistics-table></statistics-table>
			
		</div>`;
	}
}
customElements.define('overview-page', Overview);

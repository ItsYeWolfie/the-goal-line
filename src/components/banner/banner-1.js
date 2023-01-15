import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Banner1 extends LitLightElement {
	render() {
		return html`
			<section class="m-[3%]">
				<div
					class="relative h-[20vh] w-full overflow-hidden rounded-[20px] bg-opacity-[0.7] bg-gradient-to-tr from-gray-900 to-gray-600 shadow-lg shadow-slate-500 sm:h-[27vh] md:h-[32vh] xl:h-[35vh]"
					style="background-position: center center"
				>
					<div class="absolute right-[5%] bottom-0 h-[100%] w-[40%]">
						<img
							class="float-right mt-[10%] h-[90%] w-1/2 rounded-t-[20px] opacity-[0.6] "
							src="./images/flashscore1.png"
							alt=""
						/>
					</div>
					<div class="absolute right-[24%] bottom-0 z-[1] h-[100%] w-[40%]">
						<img
							class="float-right mt-[25%] h-[75%] w-2/5 rounded-t-[20px] bg-transparent opacity-[0.6] "
							src="./images/livescore.png"
							alt=""
						/>
					</div>
					<div class="flex flex-col flex-wrap">
						<div
							class="m-0 mt-[3%] ml-[3.3%] p-0 text-left text-[0.7rem] text-yellow-500 sm:text-[1.2rem] md:mt-[1%] md:text-[1.4rem] lg:mt-[1%] lg:text-[1.2rem] xl:mt-[1%]"
						>
							New Platform
						</div>
						<div
							class="m-0 mt-[2%] ml-[3.3%] w-[40%] p-0 text-[0.9rem] text-gray-100 antialiased sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.6rem]"
						>
							Get one of our sports apps,which is only available on
						</div>
						<div
							class="ml-[3.3%] mt-[1%] text-[0.5rem] text-gray-100 sm:text-[0.8rem] md:text-[1rem]"
						>
							Download Apps:
						</div>
						<div class="ml-[3.3%] mt-[2%] flex h-[30%] w-[30%] lg:h-[30%]">
							<div>
								<img
									class="float-left mx-auto h-[100%] w-[95%] animate-bounce rounded-[10px] border-2 border-gray-200 lg:h-[80%] lg:w-[80%]"
									src="./images/appstore.png"
									alt=""
								/>
							</div>
							<div>
								<img
									class="float-left h-[100%] w-[95%] animate-bounce rounded-[10px] border-2 border-gray-200 lg:h-[80%] lg:w-[80%]"
									src="./images/googleplay.png"
									alt=""
								/>
							</div>
						</div>

						<div class="mt-3 flex flex-row"></div>
					</div>
				</div>
			</section>
		`;
	}
}
customElements.define('banner-b', Banner1);

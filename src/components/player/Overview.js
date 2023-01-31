import { html } from "lit";
import { LitLightElement } from "../../lib/LitElement";
import "./StatisticsTable";

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
    const response = await fetch("https://api.npoint.io/20e47a2ad154855b5fcb");
    const data = await response.json();
    this.response = data;
    this.loading = false;
    console.log(data);
  }

  render() {
    if (this.loading) {
      return html`
        <div
          class="flex h-10 w-full justify-center rounded-md bg-gray-800 text-center text-white  "
        >
          <h1>Loading ...</h1>
        </div>
      `;
    }
    return html`<div class="">
      <div class="top-0 w-full flex-col place-self-start bg-gray-800 p-6">
        <h1 class="ml-6 flex-col rounded-xl pb-4 text-sm text-sky-600">
          PLAYER DETAILS
        </h1>

        <div class="flex justify-between">
          <div>
            <img
              class=" ml-6 rounded-full "
              src="${this.response.response[0].player.photo}"
            />
          </div>
          <div class="flex-col ">
            <div class="flex pb-4">
              <div class="flex-col rounded-xl  pr-12 text-xl text-white">
                <h1 class="text-sm text-gray-400 ">NAME</h1>
                ${this.response.response[0].player.name}
              </div>
              <div class="flex-col rounded-xl pr-12 text-xl text-white">
                <h1 class="text-sm text-gray-400">LASTNAME</h1>
                ${this.response.response[0].player.lastname}
              </div>

              <div class="flex-col rounded-xl pr-24 text-xl text-white">
                <h1 class="text-sm text-gray-400">AGE</h1>
                ${this.response.response[0].player.age}
              </div>
              <div class="flex-col rounded-xl pr-4 text-xl text-white">
                <h1 class="text-sm text-gray-400">NATIONALITY</h1>
                ${this.response.response[0].player.nationality}
              </div>
            </div>
            <div class="flex pb-4">
              <div class="flex-col rounded-xl text-xl text-white">
                <h1 class="text-sm text-gray-400 ">PLAYS FOR</h1>
                <div class="flex items-center">
                    <div>${this.response.response[0].statistics[0].team.name}</div>
                    <img
                    class=" align-center flex w-12 rounded-full ml-4"
                    src="${this.response.response[0].statistics[0].team.logo} "
                    />
                 </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <div class="mx-auto mt-6 w-full px-6 text-white md:px-12 ">
        <div
          class="justify-content-center mb-30-none -mr-4 -ml-4 flex flex-wrap "
        >
          <div class="col-sm-6 col-xl-3 mr-4 w-48">
            <div class="rounded-2 mb-8">
              <div
                class="relative overflow-hidden rounded-lg  bg-pink-600 pt-10 pl-4 pr-14 pb-8"
              >
                <div class="absolute right-0 bottom-0 text-8xl opacity-20">
                  <i class=" fas fa-thin fa-location-dot"></i>
                </div>
                <div class="mb-25 text-3xl">
                  <i class=" fas fa-thin fa-location-dot"></i>
                </div>
                <h5
                  class="leading-28 font-josefin-sans mt-2 text-lg text-base font-bold leading-none text-white md:text-lg"
                >
                  Place of Birth
                </h5>
                <span
                  class="leading-30 font-open-sans overflow-hidden text-base text-gray-300"
                  >${this.response.response[0].player.birth.place}
                </span>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-xl-3 mr-4 w-48">
            <div class="rounded-2 mb-8">
              <div
                class="relative overflow-hidden rounded-lg  bg-indigo-600 pt-10 pl-4 pr-14 pb-8"
              >
                <div class="absolute right-0 bottom-0 text-8xl opacity-20">
                  <i class=" fas fa-regular fa-calendar-days"></i>
                </div>
                <div class="mb-25 text-3xl">
                  <i class=" fas fa-regular fa-calendar-days"></i>
                </div>
                <h5
                  class="leading-28 font-josefin-sans mt-2 text-lg text-base font-bold leading-none text-white md:text-lg"
                >
                  Date of Birth
                </h5>
                <span
                  class="leading-30 font-open-sans overflow-hidden text-base text-gray-300"
                  >${this.response.response[0].player.birth.date}
                </span>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3 mr-4 w-48">
            <div class="rounded-2 mb-8">
              <div
                class="relative overflow-hidden rounded-lg  bg-pink-500 pt-10 pl-4 pr-14 pb-8"
              >
                <div class="absolute right-0 bottom-0 text-8xl opacity-20">
                  <i class=" fas fa-regular fa-weight-scale"></i>
                </div>
                <div class="mb-25 text-3xl">
                  <i class=" fas fa-regular fa-weight-scale"></i>
                </div>
                <h5
                  class="leading-28 font-josefin-sans mt-2 text-lg text-base font-bold leading-none text-white md:text-lg"
                >
                  Weight
                </h5>
                <span
                  class="leading-30 font-open-sans overflow-hidden text-base text-gray-300"
                  >${this.response.response[0].player.weight}
                </span>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3 w-48">
            <div class="rounded-2 mb-8">
              <div
                class="relative overflow-hidden rounded-lg  bg-orange-500 pt-10 pl-4 pr-14 pb-8"
              >
                <div class="absolute right-0 bottom-0 text-8xl opacity-20">
                  <i class=" fas fa-solid fa-person"></i>
                </div>
                <div class="mb-25 text-3xl">
                  <i class=" fas fa-solid fa-person"></i>
                </div>
                <h5
                  class="leading-28 font-josefin-sans mt-2 text-lg text-base font-bold leading-none text-white md:text-lg"
                >
                  Height
                </h5>
                <span
                  class="leading-30 font-open-sans overflow-hidden text-base text-gray-300"
                  >${this.response.response[0].player.height}
                </span>
              </div>
            </div>
          </div>
        </div>
        <statistics-table></statistics-table>
      </div>
    </div>`;
  }
}
customElements.define("overview-page", Overview);

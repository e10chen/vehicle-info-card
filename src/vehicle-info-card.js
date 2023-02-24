import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/meme-maker";

const toyotaTacoma = new URL("../assets/toyota_tacoma.jpg", import.meta.url)
  .href;

export class VehicleInfoCard extends LitElement {
  static get properties() {
    return {
      modelName: {
        type: String,
        reflect: true,
      },
      vehicleDescription: {
        type: String,
      },

      topText: {
        type: String,
        reflect: true,
      },

      bottomText: {
        type: String,
        reflect: true,
      },

      subtitle: {
        type: String,
        reflect: true,
      },

      img: {
        type: String,
      },
    };
  }

  static get styles() {
    return css`
      body {
        background: cyan;
      }
      .all {
        display: inline-block;
        border-style: var(--vehicle-info-card-border-style, solid);
        border-radius: var(--vehicle-info-card-border-radius, 20px);
        margin: 10px;
        padding: 20px;
        border-width: 5px;
        width: 300px;
        max-width: 500px;
        background-color: var(--vehicle-info-card-background-color, coral);
        margin-top: 10px;
      }
      .text {
        text-indent: 5%;
        font-size: var(--vehicle-info-card-text-font-size, 16px);
        color: var(--vehicle-info-card-text-color, blue);
      }
      .title {
        font-size: var(--vehicle-info-card-title-font-size, 40px);
        text-align: center;
        color: var(--vehicle-info-card-title-color, white);
      }
      .buttons {
        text-align: center;
        padding: 50px;
      }
      .detailButton {
        margin: 1px;
        position: center;
      }
      button:hover,
      buttons:focus {
        background-color: yellow;
      }
      .picture {
        border-radius: 10px;
        border: solid white;
        width: 300px;
      }
      meme-maker {
        border-radius: 10px;
        border: var(--vehicle-info-card-border-color, solid white);
        width: 300px;
      }
      @media (min-width: 500px) and (max-width: 800px) {
        .detailButton {
          display: none;
        }
      }
      @media (max-width: 500px) {
        .all {
          transform: scale(0.8);
        }
      }
    `;
  }

  constructor() {
    super();
    this.modelName = "Toyota Tacoma";
    this.vehicleDescription =
      "The image above is a Tacoma pickup truck made by the Japanese automaker Toyota. Toyota has been making the Tacoma pickup truck since 1995. The Tacoma has two engines options: 2.7-liter 4-Cylinder and the 3.5-liter V6. It has a miles per gallon of 20 in the city and 23 on the highway.";
    this.topText = "IM A";
    this.bottomText = "TRRRUCK";
    this.subtitle = "Ethan Chen";
    this.img =
      "https://hips.hearstapps.com/hmg-prod/images/2023-toyota-gr-corolla-111-1648581910.jpg";
  }

  toggleDetails() {
    this.shadowRoot.querySelector(".details").toggleAttribute("open");
  }

  render() {
    return html`
      <div class="all">
        <h1 class="title">${this.modelName}</h1>
        <slot name="subtitle" part="slotSubtitle"></slot>
        <meme-maker
          alt="A Toyota Tacoma"
          image-url="${toyotaTacoma}"
          top-text="${this.topText}"
          bottom-text="${this.bottomText}"
        ></meme-maker>

        <details class="details">
          <summary part="detailArrowthingy">Car Details</summary>
          <p class="text" part="descriptionText">${this.vehicleDescription}</p>
        </details>
        <slot name="img"></slot>
      </div>
    `;
  }
}

customElements.define("vehicle-info-card", VehicleInfoCard);

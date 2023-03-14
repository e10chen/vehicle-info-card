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

      topText: {
        type: String,
        reflect: true,
      },

      bottomText: {
        type: String,
        reflect: true,
      },

      img: {
        type: String,
        reflect: true,
      },

      opened: {
        type: Boolean,
        reflect: true,
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
      .subtitle {
        text-align: center;
      }
      .vehicleDescription {
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
    this.topText = "IM A";
    this.bottomText = "TRRRUCK";
    this.img =
      "https://www.kbb.com/wp-content/uploads/2020/01/763x430-brva-2020-toyota-tacoma.jpg";
    this.opened = false;
  }

  // toggleDetails() {
  //   this.shadowRoot.querySelector(".details").toggleAttribute("open");
  // }

  toggleEvent(e) {
    const state =
      this.shadowRoot.querySelector("details").getAttribute("open") === ""
        ? true
        : false;
    this.opened = state;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "opened") {
        this.dispatchEvent(
          new CustomEvent("open-changed", {
            composed: true,
            bubbles: true,
            cacnelable: false,
            detail: {
              value: this[propName],
            },
          })
        );
      }
    });
  }

  render() {
    return html`
      <div class="all">
        <h1 class="title">${this.modelName}</h1>
        <div class="subtitle">
        <slot name="subtitle" part="slotSubtitle"></slot>
        </div>
        <meme-maker
          alt="A Toyota Tacoma"
          image-url="${this.img}"
          top-text="${this.topText}"
          bottom-text="${this.bottomText}"
        ></meme-maker>

        <details
          class="details"
          .open=${this.opened}
          @toggle="${this.toggleEvent}"
        >
          <summary part="detailArrowthingy">Car Details</summary>
          <div class="vehicleDescription">
            <slot name="vehicleDescription"></slot>
          </div>
        </details>
        <slot name="img"></slot>
      </div>
    `;
  }
}

customElements.define("vehicle-info-card", VehicleInfoCard);

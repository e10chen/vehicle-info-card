import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker';

const toyotaTacoma = new URL('../assets/toyota_tacoma.jpg', import.meta.url).href;

export class VehicleInfoCard extends LitElement {
  static get properties() {
    return {
      modelName: {
        type: String, 
        reflect: true
      }, 
      vehicleDescription: {
        type: String,
      }

    }
  }

  static get styles() {
    return css`
      body {
  background: cyan; 
}

.all{
  border-style: solid;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
  border-width: 5px;
  width: 300px;
  max-width: 500px;
  margin: auto;
  background-color: coral;
  margin-top: 10px;
}

.text { 
  text-indent: 5%;
  font-size: 16px;
  color: blue;
}

.title{
  font-size: 40px;
}

.buttons{
  text-align: center; 
  padding: 5px;
}

.detailButton {
  margin: 1px;
  position: center; 
}

button:hover,
buttons:focus{
  background-color: yellow;
}

.picture {
  border-radius: 10px;
  border: solid white;
  width: 300px;
}

  @media (min-width: 500px) and (max-width: 800px) {
    
    .detailButton {
      display: none;
    }
  }

@media (max-width: 500px) {
  .all{
    transform: scale(0.8);
  }
}
    `;
  }

  constructor() {
    super();
    this.modelName = "Toytoa Tacoma";
    this.vehicleDescription = "The image above is a Tacoma pickup truck made by the Japanese automaker Toyota. Toyota has been making the Tacoma pickup truck since 1995. The Tacoma has two engines options: 2.7-liter 4-Cylinder and the 3.5-liter V6. It has a miles per gallon of 20 in the city and 23 on the highway."

  }

  render() {
    return html`
<div class="all">
  <h1 class="title">
  ${this.modelName}
  </h1>
    <img class ="picture" src ="${toyotaTacoma}">
  
  <p class ="text">
    ${this.vehicleDescription}
  </p>
    <slot></slot>
</div>
    `;
  }
}

customElements.define('vehicle-info-card', VehicleInfoCard);
import { html } from 'lit';
import '../src/vehicle-info-card.js';

export default {
  title: 'VehicleInfoCard',
  component: 'vehicle-info-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <vehicle-info-card
      style="--vehicle-info-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </vehicle-info-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};

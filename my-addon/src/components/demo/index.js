import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import FlipButton from './button';
import BlahButton from './button.hbs';

export default class Demo extends Component {
  Button = FlipButton;
  Button2 = BlahButton;

  @tracked active = false;

  flip = () => (this.active = !this.active);
}

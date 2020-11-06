import { Text } from './text.js';
import { Visual } from './visual.js';
import { setColor } from './color.js';

class App {
    constructor() {
        WebFont.load({
            google: {
                families: ['Hind:700']
            },
            fontactive: () => {
                this.text = new Text();
                this.text.setText(
                    'A',
                    2,
                    document.body.clientWidth,
                    document.body.clientHeight,
                )
            }
        });
    }
}

window.onload = () => {
    new App();
}
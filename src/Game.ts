import {Container, Sprite, Text} from "pixi.js";
import {sound} from '@pixi/sound';
import gsap from "gsap";

import Background from "./Components/Background/Background";

import settings from './app.json';

class Game extends Container {
    constructor() {
        super();

        const background = new Background();

        this.addChild(
            background,
        );

        // Buttons,
        // circle 3px
        // 12 pixels padding each way,
        // text 22 pixels,

        // circle 3px
        // text 48
    }
}

export default Game;
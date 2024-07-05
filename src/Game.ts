import {Container, Sprite, Text} from "pixi.js";
import {sound} from '@pixi/sound';
import gsap from "gsap";

import Background from "./Components/Background/Background";
import SpinButton from "./Components/SpinButton/SpinButton";

import settings from './app.json';

class Game extends Container {
    private readonly _spinButton: SpinButton = null;

    constructor() {
        super();

        const background = new Background();


        this._spinButton = new SpinButton(()=> {this._onSpinButtonPressed()});

        this.addChild(
            background,
            this._spinButton
        );

        // Buttons,
        // circle 3px
        // 12 pixels padding each way,
        // text 22 pixels,

        // circle 3px
        // text 48
    }

    private _onSpinButtonPressed(): void {
    }
}

export default Game;
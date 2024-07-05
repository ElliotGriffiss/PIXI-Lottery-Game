import {Container, Sprite, Text} from "pixi.js";
import {sound} from '@pixi/sound';
import gsap from "gsap";

import Background from "./Components/Background/Background";
import SpinButton from "./Components/SpinButton/SpinButton";
import ResetButton from "./Components/ResetButton/ResetButton";
import RandomButton from "./Components/RandomButton/RandomButton";

import settings from './app.json';

class Game extends Container {
    private readonly _spinButton: SpinButton = null;
    private readonly _resetButton: ResetButton = null;
    private readonly _randomButton: RandomButton = null;

    constructor() {
        super();

        const background = new Background();

        this._spinButton = new SpinButton(()=> {this._onSpinButtonPressed()});
        this._resetButton = new ResetButton( ()=> {this._onResetButtonPressed()});
        this._randomButton = new RandomButton(()=> {this._onRandomButtonPressed()});

        this.addChild(
            background,
            this._spinButton,
            this._resetButton,
            this._randomButton
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

    private _onResetButtonPressed(): void {
    }

    private _onRandomButtonPressed(): void {

    }
}

export default Game;
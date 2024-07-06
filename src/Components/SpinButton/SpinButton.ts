import Button from "../../Engine/Button/Button";

class SpinButton extends Button {
    constructor(buttonPayload:() => void) {
        super(buttonPayload, {
            active: global.game.SpinButton_Active,
            pressed: global.game.SpinButton_Pressed,
            inactive: global.game.SpinButton_Inactive
        });
        this.x = 779;
        this.y = 472;
    }
}

export default SpinButton;
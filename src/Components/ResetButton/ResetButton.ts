import Button from "../../Engine/Button/Button";

class ResetButton extends Button {
    constructor(buttonPayload:() => void) {
        super(buttonPayload, {
            active: global.game.ResetButton_Active,
            pressed: global.game.ResetButton_Pressed,
            inactive: global.game.ResetButton_Inactive
        });
        this.x = 229;
        this.y = 472;
    }
}

export default ResetButton;
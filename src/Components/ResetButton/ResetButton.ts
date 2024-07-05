import Button from "../../Engine/Button/Button";

class ResetButton extends Button {
    constructor(buttonPayload:() => void) {
        super(buttonPayload, {
            active: global.game.ResetButton_Active,
            pressed: global.game.ResetButton_Pressed,
            inactive: global.game.ResetButton_Inactive
        });
        this.x = 774;
        this.y = 91;
    }
}

export default ResetButton;
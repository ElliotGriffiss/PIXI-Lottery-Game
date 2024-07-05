import Button from "../../Engine/Button/Button";

class ResetButton extends Button {
    constructor(buttonPayload:() => void) {
        super(buttonPayload, {
            active: global.game.RandomButton_Active,
            pressed: global.game.RandomButton_Pressed,
            inactive: global.game.RandomButton_Inactive
        });
        this.x = 774;
        this.y = 141;
    }
}

export default ResetButton;
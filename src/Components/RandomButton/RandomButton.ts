import Button from "../../Engine/Button/Button";

class ResetButton extends Button {
    constructor(buttonPayload:() => void) {
        super(buttonPayload, {
            active: global.game.RandomButton_Active,
            pressed: global.game.RandomButton_Pressed,
            inactive: global.game.RandomButton_Inactive
        });
        this.x = 86;
        this.y = 472;
    }
}

export default ResetButton;
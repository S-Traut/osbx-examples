import { Plugin } from "osbx";
import { PROJECT_CONSTANTS } from "../utils/constants";

export default class UtilsPlugin extends Plugin {

    remove_base_background(): void {
        const sprite = this.createSprite(PROJECT_CONSTANTS.base_background);
        sprite.fade(0, 0);
    }
}
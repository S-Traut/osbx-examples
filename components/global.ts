import { Component } from "osbx";
import UtilsPlugin from "../plugins/utils";

export default class GlobalComponent extends Component {

    private plugin_utils = this.getPlugin(UtilsPlugin)

    init(): void {
        this.plugin_utils.remove_base_background();        
    }

}
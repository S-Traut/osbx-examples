import { Component, osbx, Plugin } from "osbx";
import GlobalComponent from "./components/global";
import IntroductionSection from "./components/sections/introduction";

class MainComponent extends Component {


    init() {
        this.addComponent(GlobalComponent);
        
        // Sections
        this.addComponent(IntroductionSection);
    }
}

osbx.create(MainComponent);
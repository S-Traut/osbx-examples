import { Component } from "osbx";
import ParticlePlugin from "../../plugins/particles";

export default class IntroductionSection extends Component {

    private plugin_particle = this.getPlugin(ParticlePlugin);
    private section_start = 0;
    private section_end = 10000;

    foreground(): void {
        this.plugin_particle.generate_basic(this.section_start, this.section_end);
    }
    
    
}
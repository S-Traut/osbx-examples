import { Plugin } from "osbx";
import { SCREEN } from "../utils/constants";
import { random_range } from "../utils/random";
import { newEvent } from "dotosb";
import { Layers, Origins } from "osbx/lib/src/sprite";

export default class ParticlePlugin extends Plugin {

    // Generate a basic particle system
    generate_basic(start: number, end: number) {
        for(let i = 0; i < 20; i++) {

            const duration = random_range(1000, 3000);
            const x = random_range(SCREEN.left, SCREEN.right);
            const sprite = this.createSprite("sb/p.png", Layers.Background, Origins.Centre, { x: x, y: 0 });
            const loop_count = Math.round((end - start) / duration);

            sprite.createLoop(start, loop_count, [
                newEvent("MY", [0, duration], [480, 0], 0),
                newEvent("F", [0, duration], [1, 0], 0),
            ]);
        }
    }
}
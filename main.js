import { gsap } from "gsap";
import mitt from 'mitt';
export const eventBus = mitt();

gsap.registerPlugin(mitt);
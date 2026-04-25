/**
 * GSAP Registration Helper
 *
 * Central location to register all GSAP plugins.
 * Import this file once in your client-side provider to ensure
 * plugins are registered before any component uses them.
 */
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register plugins — safe to call multiple times
gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

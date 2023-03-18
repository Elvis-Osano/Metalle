import { writable } from "svelte/store";
const navScroll=writable({
    current:0,
    prev:0
})
export default navScroll;
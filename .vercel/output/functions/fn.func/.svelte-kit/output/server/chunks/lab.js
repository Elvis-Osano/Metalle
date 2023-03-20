import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./index2.js";
/* empty css                                        */const css = {
  code: "svg.svelte-c8tyih{stroke:currentColor;fill:currentColor;stroke-width:0;width:100%;height:auto;max-height:100%}",
  map: null
};
const IconBase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = null } = $$props;
  let { viewBox } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  $$result.css.add(css);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("viewBox", viewBox, 0)} class="${"svelte-c8tyih"}">${title ? `<title>${escape(title)}</title>` : ``}${slots.default ? slots.default({}) : ``}</svg>`;
});
const IoIosArrowRoundDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z"}"></path>`;
    }
  })}`;
});
const Lab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"bg-dark h-max w-full relative"}"><video muted autoplay loop class="${"w-full object-cover h-full"}"><source src="${"/video/client.mp4"}" type="${"video/mp4"}">
  
  Your browser does not support the video tag.
  </video> 
  <span class="${"lg:h-32 w-10 h-16 lg:w-14 grid place-items-center bg-gold/50 absolute -top-10 lg:left-10 left-5 "}"><i class="${"text-whitney"}">${validate_component(IoIosArrowRoundDown, "IoIosArrowRoundDown").$$render($$result, {}, {}, {})}</i></span></section>`;
});
export {
  IconBase as I,
  Lab as L
};

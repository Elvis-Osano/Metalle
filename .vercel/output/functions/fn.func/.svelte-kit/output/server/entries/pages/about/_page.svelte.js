import { c as create_ssr_component, d as createEventDispatcher, s as setContext, o as onDestroy, a as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { I as IconBase, L as Lab } from "../../../chunks/lab.js";
import "maplibre-gl";
import "pmtiles";
/* empty css                                                        *//* empty css                                                      */import "tsparticles-engine";
import "tsparticles";
const css$1 = {
  code: ".maplibregl-control-container button{margin:0}.map.svelte-1tna482{width:100%;height:100%}",
  map: null
};
function sleep(ms = 1e3) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { map } = $$props;
  let { id = "map" } = $$props;
  let { location = { lng: 15, lat: 45, zoom: 1 } } = $$props;
  let { style = {
    "version": 8,
    "sources": {},
    "layers": [
      {
        "id": "background",
        "type": "background",
        "paint": { "background-color": "lightgrey" }
      }
    ]
  } } = $$props;
  let { css = null } = $$props;
  let { pmtiles = false } = $$props;
  let { options = {} } = $$props;
  let { minzoom = 0 } = $$props;
  let { maxzoom = 14 } = $$props;
  let { controls = false } = $$props;
  let { tabbable = false } = $$props;
  let { zoom = null } = $$props;
  let { center = null } = $$props;
  let { pitch = null } = $$props;
  let { bearing = null } = $$props;
  let { interactive = true } = $$props;
  let { attribution = true } = $$props;
  let container;
  let _options = {};
  setContext("map", { getMap: () => map });
  if (location.bounds) {
    _options.bounds = location.bounds;
  } else if (location.lng && location.lat) {
    _options.center = [+location.lng, +location.lat];
    if (location.zoom) {
      _options.zoom = +location.zoom;
    }
    if (location.pitch) {
      _options.pitch = +location.pitch;
    }
    if (location.bearing) {
      _options.bearing = +location.bearing;
    }
  }
  if (!attribution) {
    _options.attributionControl = false;
  }
  _options = { ..._options, ...options };
  onDestroy(async () => {
    await sleep(250);
    if (map)
      map.remove();
    map = null;
  });
  function setStyle(style2) {
    if (map)
      map.setStyle(style2);
    dispatch("style", { style: style2 });
  }
  if ($$props.map === void 0 && $$bindings.map && map !== void 0)
    $$bindings.map(map);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.css === void 0 && $$bindings.css && css !== void 0)
    $$bindings.css(css);
  if ($$props.pmtiles === void 0 && $$bindings.pmtiles && pmtiles !== void 0)
    $$bindings.pmtiles(pmtiles);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.minzoom === void 0 && $$bindings.minzoom && minzoom !== void 0)
    $$bindings.minzoom(minzoom);
  if ($$props.maxzoom === void 0 && $$bindings.maxzoom && maxzoom !== void 0)
    $$bindings.maxzoom(maxzoom);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.tabbable === void 0 && $$bindings.tabbable && tabbable !== void 0)
    $$bindings.tabbable(tabbable);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.center === void 0 && $$bindings.center && center !== void 0)
    $$bindings.center(center);
  if ($$props.pitch === void 0 && $$bindings.pitch && pitch !== void 0)
    $$bindings.pitch(pitch);
  if ($$props.bearing === void 0 && $$bindings.bearing && bearing !== void 0)
    $$bindings.bearing(bearing);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.attribution === void 0 && $$bindings.attribution && attribution !== void 0)
    $$bindings.attribution(attribution);
  $$result.css.add(css$1);
  {
    setStyle(style);
  }
  return `${$$result.head += `<!-- HEAD_svelte-19mu9pj_START --><link rel="${"stylesheet"}"${add_attribute(
    "href",
    css ? css : "https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css",
    0
  )}><!-- HEAD_svelte-19mu9pj_END -->`, ""}

<div${add_attribute("id", id, 0)} class="${"map svelte-1tna482"}"${add_attribute("this", container, 0)}>${``}
</div>`;
});
const Map_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let map;
  let zoom;
  let center = {};
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h1 class="${"text-5xl w-5/6 mx-auto leading-10 font-sirenia py-10"}">We’re anchored in Nairobi but our design projects are as international as our customers.</h1>
<section class="${"h-96 relative w-5/6 mx-auto"}">${validate_component(Map, "Map").$$render(
      $$result,
      {
        id: "map",
        style: "https://api.maptiler.com/maps/streets/style.json?key=AvLKRq7x75U1Czi7a50m",
        location: {
          lng: 36.8906432970894,
          lat: -1.3287866,
          zoom: 40
        },
        map,
        zoom,
        center
      },
      {
        map: ($$value) => {
          map = $$value;
          $$settled = false;
        },
        zoom: ($$value) => {
          zoom = $$value;
          $$settled = false;
        },
        center: ($$value) => {
          center = $$value;
          $$settled = false;
        }
      },
      {}
    )}</section>`;
  } while (!$$settled);
  return $$rendered;
});
const IoLogoFacebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"}"></path>`;
    }
  })}`;
});
const IoLogoInstagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"}"></path>
<path d="${"M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"}"></path>`;
    }
  })}`;
});
const IoLogoTwitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"}"></path>`;
    }
  })}`;
});
const Founders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-4xl w-11/12 mx-auto tracking-tighter font-mont text-center m-10"}">Meet The Founders</h1>
<section class="${"bg-dark grid grid-cols-2 grid-rows-2 min-h-screen w-11/12 mx-auto"}"><div class="${"flex flex-col mt-14 mx-10 gap-8"}"><div><h1 class="${"text-7xl name text-whitney"}">Elvis Osano</h1>
            <small class="${"text-[#666666]"}">Founder</small></div>
        <div class="${"flex gap-4"}"><span class="${"w-[2px] bg-gold h-10"}"></span> 
            <p class="${"text-[#666666] leading-8"}">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                As pragmatists we’re agile in discovering opportunities to improve people’s experiences. It is as much about the little details in a design system, as it is about contributing to the evolution of the field of design.
        </p></div>
        <a href="${"https://portfolio-three-amber-38.vercel.app"}" rel="${"noreferrer"}" class="${"px-2 py-1 border border-gold w-max text-whitney hover:bg-gold hover:text-dark"}" target="${"_blank"}">View Portfolio</a>
        <div class="${"flex gap-4 text-gold h-5 w-2/6 justify-between "}"><span>${validate_component(IoLogoTwitter, "IoLogoTwitter").$$render($$result, {}, {}, {})}</span>
            <span>${validate_component(IoLogoFacebook, "IoLogoFacebook").$$render($$result, {}, {}, {})}</span>
            <span>${validate_component(IoLogoInstagram, "IoLogoInstagram").$$render($$result, {}, {}, {})}</span></div></div>
    
    <div class="${"h-screen w-full flex justify-end grayscale"}"><svg viewBox="${"0 0 200 200"}" xmlns="${"http://www.w3.org/2000/svg"}"><clipPath id="${"clip-path"}"><path fill="${"#F9D6C2"}" d="${"M60.6,-15.4C69.8,8.7,62.6,42.4,43,55.8C23.5,69.2,-8.3,62.2,-30.9,45.1C-53.5,28.1,-67,1,-60.3,-19.6C-53.6,-40.3,-26.8,-54.4,-0.6,-54.2C25.7,-54.1,51.4,-39.5,60.6,-15.4Z"}" transform="${"translate(100 100)"}"></path></clipPath><image clip-path="${"url(#clip-path)"}" xlink:href="${"images/founder3.jpg"}" class="${"object-fill w-full h-full"}"></image></svg></div>
    <div class="${"h-screen w-full flex justify-end grayscale"}">
        <svg class="${"h-full w-full flex items-center"}" viewBox="${"0 0 200 200"}" xmlns="${"http://www.w3.org/2000/svg"}"><clipPath id="${"clip-path"}"><path fill="${"#F9D6C2"}" d="${"M61.3,-24.1C66.1,-5,47.6,17.5,28.2,29.3C8.9,41.1,-11.3,42.2,-22.6,33.4C-33.9,24.6,-36.4,6,-31.2,-13.7C-25.9,-33.3,-13,-54,7.6,-56.4C28.2,-58.9,56.4,-43.2,61.3,-24.1Z"}" transform="${"translate(100 100)"}"></path></clipPath><image clip-path="${"url(#clip-path)"}" xlink:href="${"images/founder4.jpg"}" class="${"object-cover w-full h-full "}"></image></svg></div>
    <div class="${"flex flex-col mt-20 mx-9 gap-8"}"><div><h1 class="${"text-7xl name text-whitney"}">Dan Kipchirchir</h1>
            <small class="${"text-[#666666]"}">Co-Founder</small></div>
        <div class="${"flex gap-4"}"><span class="${"w-[2px] bg-gold h-10"}"></span> 
            <p class="${"text-[#666666] leading-8"}">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                As pragmatists we’re agile in discovering opportunities to improve people’s experiences. It is as much about the little details in a design system, as it is about contributing to the evolution of the field of design.
        </p></div>
        <a href="${"https://portfolio-three-amber-38.vercel.app"}" rel="${"noreferrer"}" class="${"px-2 py-1 border border-gold w-max text-whitney hover:bg-gold hover:text-dark"}" target="${"_blank"}">View Portfolio</a>
        <div class="${"flex gap-4 text-gold h-5 w-2/6 justify-between "}"><span>${validate_component(IoLogoTwitter, "IoLogoTwitter").$$render($$result, {}, {}, {})}</span>
            <span>${validate_component(IoLogoFacebook, "IoLogoFacebook").$$render($$result, {}, {}, {})}</span>
            <span>${validate_component(IoLogoInstagram, "IoLogoInstagram").$$render($$result, {}, {}, {})}</span></div></div></section>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"h-screen w-5/6 px-10 pb-16 mx-auto grid grid-rows-2 gap-4"}"><div class="${"flex items-end gap-4 "}"><div class="${"flex items-center gap-4"}"><span class="${"w-0 hidden lg:block h-[1px] bg-orange lg:w-16"}"></span>
		<h2 class="${"lg:text-xl text-orange"}">Transform your business today</h2></div></div>
	  <p class="${"w-4/6 text-7xl font-mont text-whitney "}">We focus on delivering high quality user experience design .</p></section>`;
});
const Vision = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"h-screen grid place-items-center"}"><p class="${"w-4/6 font-mont text-5xl text-whitney"}">Our journey started a decade ago. We’ve dreamed and worked side by side with people who are driven by excellence.
    </p></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${validate_component(Lab, "Lab").$$render($$result, {}, {}, {})}
${validate_component(Vision, "Vision").$$render($$result, {}, {}, {})}
${validate_component(Lab, "Lab").$$render($$result, {}, {}, {})}
${validate_component(Founders, "Founders").$$render($$result, {}, {}, {})}
${validate_component(Map_1, "Map").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

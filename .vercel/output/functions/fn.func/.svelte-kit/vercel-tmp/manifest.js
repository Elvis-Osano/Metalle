export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["f.png","favicon.ico","fonts/Floodfonts - Sirenia Black Italic .otf","fonts/Floodfonts - Sirenia Black.otf","fonts/Floodfonts - Sirenia Bold Italic.otf","fonts/Floodfonts - Sirenia Bold.otf","fonts/Floodfonts - Sirenia ExtraBold Italic.otf","fonts/Floodfonts - Sirenia ExtraBold.otf","fonts/Floodfonts - Sirenia ExtraLight Italic.otf","fonts/Floodfonts - Sirenia ExtraLight.otf","fonts/Floodfonts - Sirenia Italic Thin.otf","fonts/Floodfonts - Sirenia Light Italic.otf","fonts/Floodfonts - Sirenia Light.otf","fonts/Floodfonts - Sirenia Medium Italic.otf","fonts/Floodfonts - Sirenia Medium.otf","fonts/Floodfonts - Sirenia Regular Italic.otf","fonts/Floodfonts - Sirenia Regular.otf","fonts/Floodfonts - Sirenia SemiBold Italic.otf","fonts/Floodfonts - Sirenia SemiBold.otf","fonts/Floodfonts - Sirenia Thin.otf","fonts/mont.ttf","fonts/Montserrat-Italic-VariableFont_wght.ttf","fonts/OFL.txt","fonts/README.txt","fonts/static/Montserrat-Black.ttf","fonts/static/Montserrat-BlackItalic.ttf","fonts/static/Montserrat-Bold.ttf","fonts/static/Montserrat-BoldItalic.ttf","fonts/static/Montserrat-ExtraBold.ttf","fonts/static/Montserrat-ExtraBoldItalic.ttf","fonts/static/Montserrat-ExtraLight.ttf","fonts/static/Montserrat-ExtraLightItalic.ttf","fonts/static/Montserrat-Italic.ttf","fonts/static/Montserrat-Light.ttf","fonts/static/Montserrat-LightItalic.ttf","fonts/static/Montserrat-Medium.ttf","fonts/static/Montserrat-MediumItalic.ttf","fonts/static/Montserrat-Regular.ttf","fonts/static/Montserrat-SemiBold.ttf","fonts/static/Montserrat-SemiBoldItalic.ttf","fonts/static/Montserrat-Thin.ttf","fonts/static/Montserrat-ThinItalic.ttf","fonts/verdana/verdana-bold-italic.ttf","fonts/verdana/verdana-bold.ttf","fonts/verdana/verdana.ttf","images/bank.png","images/big.png","images/circles.svg","images/flower.png","images/founder1.jpg","images/founder2.jpg","images/founder3.jpg","images/founder4.jpg","images/logo.svg","images/logo2.svg","images/phone.png","JSON/flower.json","JSON/particles.json","JSON/pot.json","site.webmanifest","video/client.mp4","video/foot.webp","video/loader.gif"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".otf":"font/otf",".ttf":"font/ttf",".txt":"text/plain",".svg":"image/svg+xml",".jpg":"image/jpeg",".json":"application/json",".webmanifest":"application/manifest+json",".mp4":"video/mp4",".webp":"image/webp",".gif":"image/gif"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.563aaed6.js","imports":["_app/immutable/entry/start.563aaed6.js","_app/immutable/chunks/index.eb3971cd.js","_app/immutable/chunks/singletons.baa63d83.js","_app/immutable/chunks/index.3d117cb7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e1bb4901.js","imports":["_app/immutable/entry/app.e1bb4901.js","_app/immutable/chunks/index.eb3971cd.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/jobs",
				pattern: /^\/jobs\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/lab",
				pattern: /^\/lab\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

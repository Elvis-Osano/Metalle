export type menuListType = {
	text: string;
	href: string;
	icon?: any;
};

export const links: menuListType[] = [
	{
		href: '/',
		text: 'Home'
	},
	{
		href: '/about',
		text: 'About'
	},
	{
		href: '/',
		text: 'Products'
	},

	{
		href: 'https://medium.com/',
		text: 'Blog'
	},

	{
		href: '/contact',
		text: 'Contact'
	}
];

export let contrib: string[] = [
	'hello',

	'UX Design',

	'Responsive Web Development',

	'Software Application Architecture',

	'User Research',

	'OEM Software Development',

	'Information Architecture',

	'Quality Assurance',

	'UI Design'
];

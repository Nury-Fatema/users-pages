const peoples = [
	{
		id: 1,
		email: "zia@gmail.com",
		phone: "+8801919524365",
		name: " Zia",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/25443145_556187214718371_2914530569506007331_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=pF-tNH7wrEYAX8JKimb&_nc_ht=scontent.fdac80-1.fna&oh=1dfbe433598e083104d15cab6cbcd68b&oe=5E8F3298",
		salary: 35670
	},
	{
		id: 2,
		email: "masuma@gmail.com",
		phone: "+8801929524365",
		name: " Masuma",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/p720x720/69361259_2284669258269500_5469067095364861952_o.jpg?_nc_cat=108&_nc_sid=7aed08&_nc_ohc=4z_lxdvPCYEAX9IYZe2&_nc_ht=scontent.fdac80-1.fna&_nc_tp=6&oh=d8378bdddd6c9e8389001fc7d1556e99&oe=5E91DC36",
		salary: 20735
	},
	{
		id: 3,
		email: "saiful@gmail.com",
		phone: "+8801919524356",
		name: " Saiful",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/16142696_267005010386153_4664100607690744188_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=RVj680aVFWkAX_2ey1S&_nc_ht=scontent.fdac80-1.fna&oh=ce62dea73e8ef7a4388696877283d764&oe=5EA3C164",
		salary: 40300
	},
	{
		id: 4,
		email: "rafi@yahoo.com",
		phone: "+8801717524365",
		name: " Rafi",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/14333655_117988358659822_4595046740513579128_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=IVHLp7nTOL8AX_EYcgY&_nc_ht=scontent.fdac80-1.fna&oh=4330ed158c763962d3005c403d8afe94&oe=5E902E8B",
		salary: 25675
	},
	{
		id: 5,
		email: "alimpro@gmail.com",
		phone: "+8801919524358",
		name: " Abdul Alim",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t31.0-8/s960x960/20989071_909062019232249_3711239218461078372_o.jpg?_nc_cat=110&_nc_sid=7aed08&_nc_ohc=o-MDnvKT5t8AX-PeUs_&_nc_ht=scontent.fdac80-1.fna&_nc_tp=7&oh=ce75e904e12c50242d930e7e7937ce22&oe=5E913C9A",
		salary: 20675
	},
	{
		id: 6,
		email: "alom-noor@gmail.com",
		phone: "+8801323524749",
		name: " Noor Alam",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/10367743_1414894395453479_8019839596289183433_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=yeGeNfVQ9RoAX_6zW0_&_nc_ht=scontent.fdac80-1.fna&oh=25c8a1cb62a093518e7e3341728979e0&oe=5E922DB5",
		salary: 14675
	},
	{
		id: 7,
		email: "mustare-cty@hotmail.com",
		phone: "+88018289524365",
		name: "Chisty Mustare Banu",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/64900623_2351955761584594_990573411560325120_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=nDnkuWv8rUMAX-JN9jz&_nc_ht=scontent.fdac80-1.fna&oh=bc85b83ec479bffb72df786d942a863c&oe=5E92A373",
		salary: 18675
	},
	{
		id: 8,
		email: "elliolyn@gmail.com",
		phone: "+8801935524367",
		name: "Brooklyn Elliott",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/87947323_1189179854618008_4551046311478034432_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=e3droZLOKsYAX_JV25t&_nc_ht=scontent.fdac80-1.fna&oh=64f61b9302ed5e334512fd25bc6583eb&oe=5E918642",
		salary: 25675
	},
	{
		id: 9,
		email: "nayan@hotmail.com",
		phone: "+0411919534365",
		name: "Nayan",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/28951086_932671400233952_8589651894619487760_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=6TqnKF7ftpkAX-Me32R&_nc_ht=scontent.fdac80-1.fna&oh=ee780b871aae2800a96f7c8d2c895ca0&oe=5E926101",
		salary: 16675
	},
	{
		id: 10,
		email: "alamin@yahoo.com",
		phone: "+8801525698741",
		name: "Al-Amin",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t31.0-1/p960x960/17760883_1040213012789430_6094881344446973522_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=Rp7nE0J-mdYAX_6YjjU&_nc_ht=scontent.fdac80-1.fna&_nc_tp=6&oh=aa51891af095ac2d50b986390b43a673&oe=5E9046BD",
		salary: 126733
	},
	{
		id: 11,
		email: "rahman-mizan@yahoo.com",
		phone: "+8801919524333",
		name: "Mizanur Rahman",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/p960x960/32234251_1779222895497706_56977285256839168_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=MOxbH3kpxDUAX-LfaVV&_nc_ht=scontent.fdac80-1.fna&_nc_tp=6&oh=26bf9c32505ac6aa22d21e6952dee4fd&oe=5E9189E8",
		salary: 90675
	},
	{
		id: 12,
		email: "brooke-shemane@gmail.com",
		phone: "+8801653524365",
		name: "Brooke Shemane Rosenogle",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/28166701_1551155091649393_2626425186786679380_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=W-G3KmAGlfgAX80neIP&_nc_ht=scontent.fdac80-1.fna&oh=d2bea6bbb5d263b6c2cbe327f5ec71b9&oe=5EA2B429",
		salary: 900675
	},
	{
		id: 13,
		email: "khalil@gmail.com",
		phone: "+8801919525252",
		name: "G.M. Khalilur Rahman",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/p720x720/71734258_2910444629001325_560565099815763968_o.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=wuXzXpm1d2MAX9nNUPl&_nc_ht=scontent.fdac80-1.fna&_nc_tp=6&oh=285e2d6b92a5dd69762e0ecffb4407dc&oe=5E91D4BF",
		salary: 166755
	},
	{
		id: 14,
		email: "Md.nazin@yahoo.com",
		phone: "+8801348659874",
		name: "Md Nazinur Rahim",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/12688143_10206346880485780_1492341484186721085_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=gbA3cHivp88AX_A9hgV&_nc_ht=scontent.fdac80-1.fna&oh=98d5d519def5cc44497a30f7c7a55127&oe=5E9083F8",
		salary: 186755
	},
	{
		id: 15,
		email: "moni@hotmail.com",
		phone: "+8801563524555",
		name: "Maniruzzaman Moni",
		imageUrl: "https://scontent.fdac80-1.fna.fbcdn.net/v/t1.0-9/p720x720/79022870_2598389616873363_1880015027793035264_o.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_ohc=gJCRUBaZT8UAX8MssaL&_nc_ht=scontent.fdac80-1.fna&_nc_tp=6&oh=4a342e2ac17750574ec23deb0c1229c4&oe=5E8FF750",
		salary: 25675
	}
];

export default peoples;

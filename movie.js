class movie {
	AmountofFrames = 0;
	MovieStarttime = 0;

	constructor(opts) {
		this.movieStarttime = 0;
		this.title = opts.title;
		this.setting = opts.setting;
		this.bgmusic = opts.bgmusic;
		this.character = opts.character;
		this.filter = opts.filter;
		this.language = opts.language;
		this.props = opts.props;
		this.threeDmodel = opts.threeDmodel;
		this.timeOfendMovieMinutes = opts.timeOfendMovieMinutes;
		this.timeInMovie = opts.timeInMovie;

	//Calculating amount of frames to make 3D model move
		const sizeofModel = this.setting / 2;
		const fps = this.timeInMovie / 60;

	//Projecting AR MODEL to move
		setInterval(() => {
			const animation = fps * this.AmountofFrames;
			this.projectModel(animation);
		}, sizeofModel); 
}
	getNumberOfFrames() {
		return this.AmountofFrames;
	}

	projectModel(frames) {
		this.AmountofFrames = frames;
	}
}
	const mainCharacterInfo = {
	name: 'Lulu',
	heightofCharacter: 5, // terms in feet
	species: 'Human',
	role: 'Protagonist',
	timeInMovie: 80000, //terms in seconds
	ARmodel: true
};
const mainCharacter = new movie(mainCharacterInfo);

	const sideCharacterInfo = {
		name: 'Choo-Choo',
		heightofCharacter: 14, 
		species: 'Talking Train',
		role: 'Sidekick',
		timeInMovie: 30000, //terms in seconds
		ARmodel: true

	};
const sideCharacter = new movie(sideCharacterInfo);

console.log('Lulu Model Total Frames: ', mainCharacter.getNumberOfFrames(), 
'Choo-Choo Model Total Frames: ', sideCharacter.getNumberOfFrames());

// extending class with projecting SETTING/BACKGROUND when using AR (Private)
class ARsetting extends movie {
	#height = 0;
	#length = 0;
	#distance;

	getNumberOfFrames() {
		return 444;
	}

	constructor(height, length, distance) {
		super(height, length, distance)
		this.#height = height;
		this.#length = length;
		this.#distance = distance;
	}

	static displayAmount = 'Please stand by 5 feet to start the AR movie';
	static ARProjectile(x, y) {
		const sizeofScreen = x.height + x.length;
		const distanceFromUser = y.height * y.length;

		return Math.hypo(sizeofScreen, distanceFromUser);
	}
}

//Making setting move (ex: stars moving in the bg)
const mainSettingInfo = {
	name: 'Space',
	color: 'Purple',
	shapes: 'Stars',
	distanceFromCharacters: 5000, //terms of feet
	ARmodel: false,
	timeInMovie: 100000
};
const mainSetting = new ARsetting(mainSettingInfo);

console.log('Setting Total Frames: ', mainSetting.getNumberOfFrames());

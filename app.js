function Animal(name, age, sound, region){
	this.name = name;
	this.age = age;
	this.sound = sound;
	this.region = region;
};

Animal.prototype.say = function(){
	console.log(this.name + ' is saying ' + this.sound);
};

function Cat(name, age, region){
	var cat = {};
	Animal.apply(cat, [name, age, 'meow-meow', region]);
	cat.__proto__ = Animal.prototype;

	cat.sleep = function(){};
	cat.goAway = function(){
		console.log(this.name + ', go away!');
	};
	return cat;
}

var Venera = new Cat('Venera', 0.5);
Venera.say();
Venera.goAway();

function Dog(name, age, sound, region){
	var dog = {};
	Animal.apply(dog, [name, age, 'bark-bark', region]);
	dog.__proto__ = Animal.prototype;
	dog.watchOver = function(){};
	dog.goAway = function(){
		console.log(this.name + ', go away!');
	};
	return dog;
}

var Rex = new Dog('Rex', 7);
Rex.say();
Rex.goAway();

function Woodpecker(name, age, sound, region){
	var woodpecker = {};
	Animal.apply(woodpecker, [name, age, 'knock-knock', region]);
	woodpecker.__proto__ = Animal.prototype;
	woodpecker.knock = function(){};
	woodpecker.goAway = function(){
		console.log(this.name + ', go away!');
	};
	return woodpecker;
}

var Garry = new Woodpecker('Garry', 1, 'Knock-knock', 'Chernobil');
Garry.say();
Garry.goAway();

//Object.create();

var Animal2 = {
	name: 'default',
	age: 'default',
	sound: 'default',
	region: 'default',
	say: function(){
		console.log(this.name + ' is saying ' + this.sound);
	}
}

var Cat2 = Object.create(Animal2);
Cat2.name = "Positiv";
Cat2.sound = "meow-meow";
Cat2.goAway = function(){
	console.log(this.name + ', go away!');
};
Cat2.sleep = function(){};
Cat2.goAway();
Cat2.say();

var Dog2 = Object.create(Animal2);
Dog2.name = "Dug";
Dog2.sound = "bark-bark";
Dog2.goAway = function(){
	console.log(this.name + ', go away!');
};
Dog2.watchOver = function(){};
Dog2.goAway();
Dog2.say();

var Woodpecker2 = Object.create(Animal2);
Woodpecker2.name = "Woody";
Woodpecker2.sound = "knock-knock";
Woodpecker2.goAway = function(){
	console.log(this.name + ', go away!');
};
Woodpecker2.knock = function(){};

Woodpecker2.goAway();
Woodpecker2.say();

function getType(o){
	if (o.sleep){
		return 'Cat';
	}else if(o.watchOver){
		return 'Dog';
	}else if(o.knock){
		return 'Woodpecker';
	}else if(o.say){
		return 'Animal';
	}else{
		return 'No idea!';
	}
};

console.log(getType(Cat2));

function getType2(){
	if (this.sleep){
		return 'Cat';
	}else if(this.watchOver){
		return 'Dog';
	}else if(this.knock){
		return 'Woodpecker';
	}else if(this.say){
		return 'Animal';
	}else{
		return 'No idea!';
	}
};

console.log(getType2.apply(Venera));
console.log(getType2.call(Rex));
console.log(getType2.bind(Garry)());


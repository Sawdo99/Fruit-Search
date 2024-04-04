const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// result box
const suggestions = document.querySelector('.suggestions'); 

// input box
const input = document.querySelector('#fruit');

// Any time user types in box this function will run:
input.onkeyup = function(){
	let result = []; 
	let word = input.value;
	let formatedWord = word.trim()
	
	if(word.length) {
		result = fruit.filter((keyword)=> {
			return keyword.toLowerCase().includes(formatedWord.toLowerCase());
		});
		
		console.log(result);
	}
	
	display(result);

	if(!result.length){
		suggestions.innerHTML = '';
	}
}

// This will show any results that match the input from the user:
function display (result){
	const content = result.map((list)=>{
		return "<li onclick=selectInput(this)>" + list + "</li>";
	});

	suggestions.innerHTML = "<ul>" + content.join('') + "</ul>";
}

// This will disp,ay the choosen fruit: 
function selectInput(list){
	input.value = list.innerHTML;
	suggestions.innerHTML = '';
}
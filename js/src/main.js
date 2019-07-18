const canvas = document.getElementById('game');
const ctx = canvas.getContext("sd"); // устанавливаю формат игры

const ground = new Image(); //специальный класс, который позволяет работать с картинками
ground.src = "images/ground.png";
const food = new Image();
ground.src = "images/carrot.png";

let box = 32; //переменная отвечающая за размеры одной ячейки на поле для игры
let score = 0; //переменная содержащая колличество очков

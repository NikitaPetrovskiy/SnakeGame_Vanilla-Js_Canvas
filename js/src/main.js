const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d"); // устанавливаю формат игры

const ground = new Image(); //специальный класс, который позволяет работать с картинками
ground.src = "/img/ground.png";
const food = new Image();
food.src = "/img/carrot.png";

let box = 32; //переменная отвечающая за размеры одной ячейки на поле для игры
let score = 0; //переменная содержащая колличество очков


// функция, которая рисует объекты внутри canvas
function drawGame() {
    //функция canvasб которая позволяет рисовать картинки
    ctx.drawImage(ground, 0, 0); //указываю картинку с которой буду работать и координаты x, y
};

// помещаем функция для отрисовки, котораядолжна выполняться каждые 100 млсек.
let game = setInterval(drawGame, 100);


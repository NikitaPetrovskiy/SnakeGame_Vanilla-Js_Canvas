const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d"); // устанавливаю формат игры

const ground = new Image(); //специальный класс, который позволяет работать с картинками
ground.src = "/img/ground.png";
const foodImg = new Image();
foodImg.src = "/img/carrot.png";

let box = 32; //переменная отвечающая за размеры одной ячейки на поле для игры
let score = 0; //переменная содержащая колличество очков

// объект для отображения морковки
let carrot = {
    // после каждой перезагрузки страницы, морковка будет появляться в рандомном месте
    //17 ячеек по вертикали умноженное на общее колл. ячеек
    x: Math.floor((Math.random() * 17 + 1) * box),
    y: Math.floor((Math.random() * 15 + 2) * box), // по горизонтали
}

// массив для отображения змейки
let snake = [];
// голова для змейки. При старте игры всегда будет находиться по центру поля
snake[0] = {
  x: 9 * box,
  y: 10 * box
};

// функция, которая рисует объекты внутри canvas
function drawGame() {
    //функция canvasб которая позволяет рисовать картинки
    ctx.drawImage(ground, 0, 0); //указываю картинку с которой буду работать и координаты x, y
    ctx.drawImage(foodImg, carrot.x, carrot.y);

    //отображаю змейкую
    snake.forEach(item => {
        ctx.fillStyle = 'green'; //голова будет квадратиком зелёного цвета
        ctx.fillRect(item.x, item.y, box, box) // координаты по оси x, y, а так же размер поля по вертикали и горизонтали
    });
};

// помещаем функция для отрисовки, котораядолжна выполняться каждые 100 млсек.
let game = setInterval(drawGame, 100);


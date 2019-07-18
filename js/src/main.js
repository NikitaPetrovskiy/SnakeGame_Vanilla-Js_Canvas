window.onload = function () {
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext("2d"); // устанавливаю формат игры

    const ground = new Image(); //специальный класс, который позволяет работать с картинками
    ground.src = "/img/ground.png";
    const foodImg = new Image();
    foodImg.src = "/img/carrot.png";

    let box = 32; //переменная отвечающая за размеры одной ячейки на поле для игры
    let score = 0; //переменная содержащая колличество очков
    let snake = []; // массив для отображения змейки
    // объект для отображения морковки
    let carrot = {
        // после каждой перезагрузки страницы, морковка будет появляться в рандомном месте
        //17 ячеек по вертикали умноженное на общее колл. ячеек
        x: Math.floor((Math.random() * 17 + 1)) * box,
        y: Math.floor((Math.random() * 15 + 3)) * box, // по горизонтали
    }
    //переменная, состояния движения змейки
    let dir;

    // голова для змейки. При старте игры всегда будет находиться по центру поля
    snake[0] = {
    x: 9 * box,
    y: 10 * box
    };

    //обработчик событий на нажание клавиш
    document.addEventListener('keydown', getDirection);

    //функция для обработки нажатия клавиш
    function getDirection(e) {
        if (e.keyCode == 37  && dir != 'right') {
             dir = 'left';
        } else if (e.keyCode == 38 && dir != 'down') {
            dir = 'up';
        } else if (e.keyCode == 39 && dir != 'left') {
            dir = 'right';
        } else if (e.keyCode == 40 && dir != 'up') {
            dir = 'down';
        }
    };

    //функция которая отлавливает касается ли змейка сама себя
    function getBodySnake(head, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (head.x == arr[i].x && head.y == arr[i].y) {
                clearInterval(game);
                alert(`Игра окончена. Ваши очки ${score}`);
            }
        }
    };


    // функция, которая рисует объекты внутри canvas
    function drawGame() {
        //функция canvas, которая позволяет рисовать картинки
        ctx.drawImage(ground, 0, 0); //указываю картинку с которой буду работать и координаты x, y
        ctx.drawImage(foodImg, carrot.x, carrot.y);
        //переменные, где при старте находилась змейка
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        //отображаю змейкую
        for (let i = 0; i < snake.length; i++) {
            // все ячейки кроме первой будут красного цвета
            //если индекс = 0б то это первый элемент змейки и он будет зелёныйБ а остальные красные
            ctx.fillStyle = i === 0 ? 'green' : 'red';
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
         }

        //отображаю надпись
        ctx.fillStyle = 'white';
        ctx.font = '50px Arial';
        ctx.fillText(score, box * 2.5, box * 1.7);


         //логика для съедания морковки
         if (snakeX == carrot.x && snakeY == carrot.y) {
             score++;
            //создаю новую морковку
            carrot = {
                x: Math.floor((Math.random() * 17 + 1)) * box,
                y: Math.floor((Math.random() * 15 + 3)) * box,
            };
            } else {
                 snake.pop();
            }
    
         //логика для завершения игры
        if (snakeX < box || snakeX > box * 17 ||
            snakeY < 3 * box || snakeY > box * 17) {
            clearInterval(game);
            alert(`Игра окончена. Ваши очки ${score}`);
        }

        if (dir == 'left') snakeX -= box; //отнимаю одну ячейку
        if (dir == 'right') snakeX += box;
        if (dir == 'up') snakeY -= box;
        if (dir == 'down') snakeY += box;

        //координаты для новой позиции
        let newHead = {
            x: snakeX,
            y: snakeY
        };

        getBodySnake(newHead, snake);

        //первым элементов добавляю новые значения
        snake.unshift(newHead);
    };

    // помещаем функция для отрисовки, котораядолжна выполняться каждые 100 млсек.
    let game = setInterval(drawGame, 100);
}


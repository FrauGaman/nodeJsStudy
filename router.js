const express = require('express');
const app = express();

//определяем роутер
const productRouter = express.Router();

//определяем маршруты и их обработчики внутри роутера
productRouter.use('/create', function (request, response){
	response.send('Добавление товара');
});
productRouter.use('/:id', function (request, response){
	response.send(`Товар ${request.params.id}`);
});
productRouter.use('/', function(request, response){
	response.send('Список товаров');
});
//Сопоставляем роутер с с конечной точкой "/products"
app.use('/products', productRouter);

app.use('/about', function(request, response){
	response.send('О сайте');
});

app.listen(3000);
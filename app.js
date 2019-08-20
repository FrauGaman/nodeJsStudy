//подключение express
const express = require("express");
//создаем объект приложения
const app = express();
//определяем обработчик для маршрута
// app.get("/", function(request, response){
// 	//отправляем ответ
// 	response.send("<h1>Привет Express!</h1>");
// });
// app.get('/about', function(request, response){
// 	response.send("<h1>О сайте</h1>");
// });
// app.get('/contacts', function(request, response){
// 	response.send("<h1>Контакты</h1>");
// });
// //начинаем прослушивать подключения на порту 3000
// app.listen(3000);

//Использование middleware
app.use(function(request, response, next){
	console.log('Middleware 1');
	next();
});
app.use(function(request, response, next){
	console.log('Middleware 2');
	response.send('Middleware 2')
});
app.get('/', function(request, response){
	console.log('Route /');
	response.send('Hello')
});
app.listen(3000);
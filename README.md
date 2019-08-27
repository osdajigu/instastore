# Preguntas/Respuestas

1. ¿Que información recibe el endpoint? (un grupo de coordenadas donde los tenderos estan, o solo información de un unico tendero, que empresa es, etc)? Recibe info de donde el cliente espera recibir el pedido, los datos de entrada son 
```json
{
   "expectedDelivery":"utcDate",
   "destination": {  
   "name": "string",  
   "address": "string",  
   "address_two": "string",  
   "description": "string",  
   "country": "string",  
   "city": "string",  
   "state": "string",  
   "zip_code": "string",  
   "latitude": 0,  
   "longitude": 0  
}
```
2. ¿El endpoint debe trabajar para diferentes empresas, o se hara solo para 1 empresa en especifico?, en caso de ser diferentes, como se puede identificar que empresa es (esta pregunta es un complemento de la pregunta numero 1). Seria para varias , propon una solución 
3. ¿Como se define la tienda mas cercana? (Distancia, tiempo en llegar, etc) quiero dejartelo abierto para que propongas la mejor manera de acuerdo a las restricciones de tiempo que tienes y la informacion que captas en el endpoint.
4. ¿De donde se obtiene la informacion de las tiendas que existen actualmente? ¿Deben ser inventadas por uno mismo o se debe usar informacion de alguna tienda en especifico, o google maps, etc? Arma la estructura que quieras puedes tomar como base las tiendas de Soriana en Monterrey y Ciudad de Mexico
5. ¿Que es el campo nextDeliveryTime con exactitud y como se calcula? propon como se deberia calcular de acuerdo a la data que tienes , pero basicamente representa la siguiente hora disponible en que la tienda puede entregar un pedido
6. ¿Que informacion se considera relevante para llevar un registro de las llamadas al endpoint? (hora, id_empresa, token, respuesta, etc).  cual crees tu que es relevante, haz de cuenta que estas hablando con alguien de negocio que lo unico que sabe es que tiene que medir
7. ¿Que clase de coordenadas se manejan? (puntos en un plano, coordenadas esfericas, etc). cuales crees qiuhe serian mejores de acuerdo a la entrada del endpoint y al diseño que vas a plantear
8. En que formato se debe retornar la informacion del endpoint (Json, xml, texto plano, etc) json
9. Con respecto al atributo isOpen, en caso de que la tienda mas cercana se encuentre cerrada, se deberia buscar la tienda mas cercana que este abierta? o no importa e igual retornar la mas cercana asi este cerrada. pensando en un usuario final que quiere hacer sus compras de sueprmercado que crees que lo beneficiaria mas
10. Qué forma/campos tiene una tienda? definelo de acuerdo a lo que tiu modelo necesite
11. El Endpoint debe validar autorización de utilización? no, pero si lo puedes hacer seria genial

# Estructura de la base de datos:
```json
store-bd  
{  
   "id_company": "String",  
   "stores": [{ 
      "id_store": "String",  
      "name": "String",
      "address": "String",
      "latitude": "Double",  
      "longitude": "Double",  
      "city": "String",  
      "country": "String",   
      "time_open": "Hour",
      "time_close": "Hour"
   }]  
}  
```
```json
track-bd  
{  
   "time": "Date",  
   "data": {  
        "name": "String",  
        "address": "String",  
        "address_two": "String",  
        "description": "String",  
        "country": "String",  
        "city": "String",  
        "state": "String",  
        "zip_code": "String",  
        "latitude": "Number",  
        "longitude": "Number"  
    },  
    "status": "String",  
    "token": "String",  
    "response": {  
        "store_id": "String",  
        "store_name": "String",  
        "is_open": "Boolean",  
        "latitude": "Number",  
        "longitude": "Number",  
        "next_delivery_time": "Date"  
    }  
}  
```

# Entrega estimada
La entrega estimada es para el Lunes 26 de agosto de 2019 a las 11:55 pm
## Endpoints
|Name|Method|Route|Parameters|
|--|--|--|--|
|ClosestStore|GET|/closest/store|autorization token, JSON|

body JSON:
```json
{
   "expectedDelivery": "utcDate",
   "destination": {  
   "name": "string",  
   "address": "string",  
   "address_two": "string",  
   "description": "string",  
   "country": "string",  
   "city": "string",  
   "state": "string",  
   "zip_code": "string",  
   "latitude": 0,  
   "longitude": 0  
}, 
```
Example Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9jb21wYW55IjoiU29yaWFuYSJ9.4HYqpFI2V5N1teEncL1wlE1XKyr1RZoSWlrqP58nijI  
Example Json:
```json
{  
	"expected_delivery": "{{current_timestamp}}",  
	"destination": {  
		"name": "Osman David Jimenez Gutierrez",  
	    "address": "Cra 96 D bis 22 h 12",  
	    "address_two": "apto 114",  
	    "description": "rapido por favor",  
	    "country": "Mexico",  
	    "city": "Monterrey",  
	    "state": "Colorado",  
	    "zip_code": 107472,  
	    "latitude":  25.686506,  
		"longitude": -100.318328  
	}  
}  
```
## Improvements and trade offs
1. What would you improve from your code? why?
   The way I handle errors because I am not handling all possible errors. Also, I would implement a way to test the app easier because right now I think there could be bugs hidden somewhere
2. Which trade offs would you make to accomplish this on time? What'd you do next time to deliver more and sacrifice less?
   I would use driven-test-development so I can write code for test cases but priorizing this I can assure the quality of the product.
3. Do you think your service is secure? why?
   I think it is in part, although im not using environment variables for the part of verifying if the token sent by the client is valid or not, I will only allow certain clients to have access to the server. 
   The other thing is that DB is not secured, so anyone with acces to DB will be able to see the data.
4. What would you do to measure the behaviour of your product on a production environment?
   With the track I have, I would meassure how many request is receiving in certain time and the response time is taking each response, and based on that I would have a measure.

## Decisions.
I decided that the closest store is the one that is able to delivery as soon as possible the delivery, even if it is currently closed. For that, I took into account the time until opens.
I only worked with stores from Moterrey City.

## Blockers.
I had a a little problems using the API of google to request the information of stores, since it allows few requests..



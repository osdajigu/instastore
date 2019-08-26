# Preguntas/Respuestas

1. ¿Que información recibe el endpoint? (un grupo de coordenadas donde los tenderos estan, o solo información de un unico tendero, que empresa es, etc)? Recibe info de donde el cliente espera recibir el pedido, los datos de entrada son expectedDelivery: utcDate , representa la hora estimada de entrega de un pedido, 
 destination": {
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
store-bd
{
   {
      id_company: Integer,
      stores: [{
         id_store: Integer,
         name: String
         address: String
         latitude: Double,
         longitude: Double,
         city: String,
         state: String,
         country: String
         time_open: Hour
         time_close: Hour
         time_till_available: Date
      }]
   }
}
 
track-bd
{
   time: Date
   data: {
      name: string,
      address: string,
      address_two: string,
      description: string,
      country: string,
      city: string,
      state": string,
      zip_code: string,
      latitude: 0,
      longitude: 0
   }
   status: String
   response: {
      store_id: String
      store_name: String
      is_open: Boolean
      latitude: Double
      longitude: Double
      next_delivery_time: Date
   }
}

# Entrega estimada
La entrega estimada es para el Lunes 26 de agosto de 2019 a las 11:55 pm

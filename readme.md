Tarea: 
-Investigar sobre middleware
-Investigar JWT(JsonWebToken)  // cat, tac, act -> a:1, t:1, c:1 // 5 minutos 
// tipo de codificacion, estandares, claves(tokens), algoritmos, 
    servidor genera token, Rola based management
//
-Investigar estructura de proyectos nodejs
-Investigar CORS  -> acceso entre sitios, blacklist,whitelist => Cuestiones de seguridad
// white list  www.nuestro-super-be.com -> www.nuestro-super-fe.com
// blacklist todo lo que no sea 
-Investigar Rate Limiter -> 
 Youtube => 2 por dia // 1 GB por dia
 por que habra usuarios o hackers que ataquen de forma masiva y simultanea
 // 1 billon de peticiones por segundo 
 // llegan ingenieros que envian 2xY Y= limite de peticiones
 // 2 billones de peticiones
 // los balanceadores se sobrecargan y apagan el sistema
 rate limiter -> IP User Id  -> 103.122.111.334 -> 5 peticiones por segundo, ya no le sirves mas 
 100 millones de peticiones desde diferentes ips donde  cada ip utilice el tope de peticiones
 
 Los boletos se venderan a las 10 am
    muchos usuarios desde las 6 am
    millones de peticiones por segundo IP

load balancers scaling on demands ->  AWS,GCP, Azzure
Configuracion donde dices por default tenemos 10 servidores -> 
si supera los 90 millones de request empieza a agregar replicas
agrega 5 replicas, 15 servidores

-Investigar ORM (Sequelize, mongoose) Object relational model
// SQL 
// query -> Select * from students etc etc etc
// Sequelize -> students.get()
// schema 
// simplificar el trabajo con DB
// Seguridad select * from '${payload}'
// 
-Instalar MongoDB
-Instalar SQL (Puede ser con HeidiSQL)
- Setup BE
- Setup FE
- 

## 
/backend
 ├── src/
 │   ├── controllers/      # Lógica de negocio de cada entidad
 │   ├── models/           # Definición de entidades (MongoDB con Mongoose o SQL con Sequelize)
 │   ├── routes/           # Rutas para cada módulo
 │   ├── services/         # Servicios auxiliares (evaluación de respuestas, ranking, etc.)
 │   ├── database/         # Configuración de la base de datos
 │   ├── app.js            # Configuración principal del servidor
 │   ├── server.js         # Punto de entrada
 ├── package.json
 ├── .env
 ├── README.md

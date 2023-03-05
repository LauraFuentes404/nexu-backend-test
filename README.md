#  Nexu Backend Coding Exercise

  
  

##  [](#tabla-de-contenido)Tabla de contenido

  


1.  [Estructura del proyecto](#estructura-del-proyecto)
2.  [Instalacion](#instalacion)
3.  [Challenge](#challenge)

 


###  Tecnologías

  

- Lenguaje de programación: JavaScript

- Framework web: Express.js


  

##  [](#estructura-del-proyecto)Estructura del proyecto

    

Las partes de la aplicación son:
  

```

Backend

├── controllers # Esta carpeta contiene las funciones que tienen la responsabilidad de recibir y procesar datos

│ ├── brand.controller.js # Contiene la delegación de entradas y salidas para marcas

│ ├── model.controller.js # Contienen la delegación de entradas y salidas para modelos

├── services #  Proporcionan funcionalidades específicas a otros componentes y aplicaciones

│ ├── brand.service.js # Contiene las funcionalidades para marcas

│ ├── model.service.js #  Contiene las funcionalidadesmodelos

├── routers # Esta carpeta contiene los archivos de enrutamiento, que manejan las solicitudes HTTP y deciden qué acción tomar.

│ ├── brands.router.js # Contiene las funciones necesarias administrar datos de marcas

│ ├── models.router.js # Contienen las funciones necesarias para administrar datos de modelos

├── package-lock.json # Este archivo contiene información detallada sobre las dependencias y su versión exacta instalada.

├── package.json # Este archivo contiene información sobre la aplicación, incluidas las dependencias y scripts de npm.

├── config.js # Este archivo contiene variables de entorno que se utilizarán en la aplicación.

├── bd.js # Conexión a base de datos

├── scripts  # Contiene los script necesarios para migrar a la base de datos el models.json del ejemplo.

└── index.js # Este archivo es el punto de entrada de la aplicación y contiene la configuración principal de la aplicación.

```

##  [](#instalacion)Instalacion

  

###  [](#local)Local

  

Para iniciar con el proyecto, se deben seguir los siguientes pasos:

  

1. Clonar el proyecto ejecutando la siguiente instrucción:

  

```

git clone https://github.com/remigioamc/nexu-backend-test.git

```

cambiar a la rama dlfo_test 

2. primero es necesario crear una base de datos llamada nexu y cambiar las credenciales de config.js posteriormente  escribe el siguiente comando:

  

```shell

node index.js

```
2. con el anterior codigo se migra se comprueba la base de datos y migra los modelos, posteriormente para poder migrar models.js ingresamos a la carpeta scripts y ejecutamos.

```
 node migration.js
```
3. Para realizar pruebas unitarias mocha test.js 

#  [](#challenge)Challenge
```

GET /brands

GET /brands/:id/models

POST /brands

POST /brands/:id/models

PUT /models/:id

GET /models

```

  

####  GET /brands

  

List all brands

```json

[

{"id":  1,  "nombre":  "Acura",  "average_price":  702109},

{"id":  2,  "nombre":  "Audi",  "average_price":  630759},

{"id":  3,  "nombre":  "Bentley",  "average_price":  3342575},

{"id":  4,  "nombre":  "BMW",  "average_price":  858702},

{"id":  5,  "nombre":  "Buick",  "average_price":  290371},

"..."

]

```

The average price of each brand is the average of its models average prices

  

####  GET /brands/:id/models

  

List all models of the brand

```json

[

{"id":  1,  "name":  "ILX",  "average_price":  303176},

{"id":  2,  "name":  "MDX",  "average_price":  448193},

{"id":  1264,  "name":  "NSX",  "average_price":  3818225},

{"id":  3,  "name":  "RDX",  "average_price":  395753},

{"id":  354,  "name":  "RL",  "average_price":  239050}

]

```

  

####  POST /brands

  

You may add new brands. A brand name must be unique.

  

```json

{"name":  "Toyota"}

```

  

If a brand name is already in use return a response code and error message reflecting it.

  
  

####  POST /brands/:id/models

  

You may add new models to a brand. A model name must be unique inside a brand.

  

```json

{"name":  "Prius",  "average_price":  406400}

```

If the brand id doesn't exist return a response code and error message reflecting it.

  

If the model name already exists for that brand return a response code and error message reflecting it.

  

Average price is optional, if supply it must be greater than 100,000.

  
  

####  PUT /models/:id

  

You may edit the average price of a model.

  

```json

{"average_price":  406400}

```

The average_price must be greater then 100,000.

  

####  GET /models?greater=&lower=

  

List all models.

If greater param is included show all models with average_price greater than the param

If lower param is included show all models with average_price lower than the param

```

# /models?greater=380000&lower=400000

```

```json

[

{"id":  1264,  "name":  "NSX",  "average_price":  3818225},

{"id":  3,  "name":  "RDX",  "average_price":  395753}

]

```

  

- Code all the endpoints and the logic needed

  

- Create a database to store this information

  

- Populate the database from the json included in this repository

  


  
##  [](#autor)Autor

- Diana Laura Fuentes Osorio
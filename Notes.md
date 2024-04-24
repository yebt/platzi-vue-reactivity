# Reactividad con vue 3

## Framework - Librería 

Librería: Herramienta
Framework: conjunto de herramientas y marco de trabajo

## Progresividad

El uso de capas

Declarative rendering -> Componentes system -> Client-side routing -> State Managements -> Many More

### Declarative rendering

- Use the information to use in the app (DATA)
- Presentation show tie info

La información y la presentación son dependientes y están acopladas.

> La Magia es ciencia que aún no conocemos.

### Componentes

Pieza de código que pueden ir desde lo más simple o complejo.
Deben ser:

- Agnosticos a su entorno

### Reactividad

Responsive:
    - resilient: work with bad conditions
    - scalable: Grow without problems
 - Use messages with observers

Twitter:

- info with errors
- Work with so many users
- allow messages

Observer: Wait the action

### Proxy

Client -> Server
could be corrupted or limited
Client -> Proxy -> Server
The server allow the work to make a better and secure connection

- Origin
- Tunnel (Rules): modified connection
- Destination

### Effecto

Es el resultado de generar un evento 

### Track 

Sigue la ejecución y dependencias reactivas ante cambios

### Triggers

Dispara cambios cuando cambian las dependedncias
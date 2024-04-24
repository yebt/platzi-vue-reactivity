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

---

## Aclarative 

### LIBS and FR

Prograsividad: capas desde algo sencillo agregando capas dependiendo la complejidad

### Reactividad

Paradigma
debe ser un sistema responsivo : debe ser resiliente y escalable : Arquitectura basada en mensajes 
Resiliente: trabaja con aunque algo falle
Escalable: listo para trabajar con mucha data

Sistemas que tienen mensajes que tienen observadores

### Reflect

El sistema que Refleja los comportamientos de trampas.

## Compoentn
Encapsular, presentación y lógica.

## Mounted
Toda la información reactiva ya esta lista, pero no se ha montado aun el componente en el DOM.

### Puntos par aplicar reactividad 

- Effect:
  Todo aquello que efectúa un cambio
  el efecto de multiplicar variables para un value
  el efecto de cambiar el texto
- Track
  Sigue las dependencias dinámicas y sus efectos
  Si algo cambia el track dispara el effect, es el seguimiento de esas dependencias
- Trigger:
  Son los disparadores de los efectos de las dependencias

### Options API

Objeto de opciones para confiurar nuestra aplicación o componente

### Composition API

Funcionalidad interna para componer  y organizar por caracteristicas 

<div align="right">
  <img src="https://raw.githubusercontent.com/r32mcastillo/reactpractico/main/src/assets/logos/log-2.png" alt="logo" width="50" height="auto" />
</div>


<!-- About the Project -->
## :star2: React Heroes

### :gear: Instalación 
```
git clone https://github.com/r32mcastillo/react-heroes.git
//Para instalar las dependencias
yarn
// Iniciar app
yarn dev
```

### :gear: Crear proyecto

```
yarn create vite
    react
    js
```

__proptypes__
```yarn add prop-types```
__React Router__
```yarn add react-router-dom```


#### 🚀 deploy
```
yarn add -D gh-pages
```
__Configurar vite.config.js__
``` 
export default defineConfig({
  plugins: [react()],
  base:'/react-heroes/'
})
```
__Configurar src\router\Index.jsx__
``` 
... 
,{basename:'/react-heroes/'}
);
```
```
yarn build
yarn deploy
```

__Crear el archivo deploy.sh__
- [vite static-deploy](https://vitejs.dev/guide/static-deploy.html)
- [deploy en github pages](https://www.youtube.com/watch?v=UX4gvort2TU)

### 🕮 Recursos
- [React: De cero a experto ( Hooks y MERN )](https://www.udemy.com/course/react-cero-experto/)
- [React Router](https://reactrouter.com/en/main/start/tutorial)
# angular5-laravel
Prueba de integración entre Angular 5, Angular Universal, Service Workers y Laravel 5.



Esta dividido entre el Front End (carpeta: `ngcurso`) Angular 5 con Universal y el módulo de Service Workers activado y el API Back End (carpeta: `laravel`) Laravel 5 con una base de datos SQLite preconfigurada para el ejemplo y haciendo uso de CORS para el intercambio de datos entre sistemas.

Para ejecutar esta prueba deben escribir en una terminal (hay que tener composer, laravel y angular-cli ya instalados):

```
$git clone https://github.com/Rodasac/angular5-laravel.git
$cd angular5-laravel
$cd laravel
$composer install
$php artisan serve
```



Ahora en otra terminal sin cerrar la anterior, bajo el mismo directorio del proyecto tipeamos:

```
$cd ngcurso
$npm -i -D
$npm run build:prerender
$npm run server:prerender
```



Ahora luego de que lo anterior termine, en un navegador se debe tipear: http://localhost:4000/ y el ejemplo ya estará ejecutándose.



TODO:

​	- Aún falta que la API de laravel (las imágenes solicitadas) sean guardadas en la caché al igual que la página.
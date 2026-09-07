# ¿Puedo usar vcards bajo mi propio dominio web?

**Sí**, es posible usar el sistema de vcards bajo un subdominio de tu propiedad.


Por ejemplo, si dispones de el dominio **mi-empresa.com** podrías acceder a tus vcards bajo cualquier subdominio, como  **vcards.mi-empresa.com** . Por tu parte solo sería necesario crear una entrada en tu servicio de DNS de la siguiente forma.

```
type: CNAME
name: vcards.mi-empresa.com
value: vcards-go.tictap.me
```

Tras realizar este cambio tendrás que notificarnos que deseas usar tu propio subdominio para actualizar la URLs de tus tarjetas.

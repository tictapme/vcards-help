# Cómo personalizar tu Wallet ( .pkpass )

## ¿Qué es un archivo PKPASS ?

PKPASS es el formato de archivo de pases que utiliza Apple Wallet. En TicTAP, Wallet empresarial te permite definir la identidad visual del pase y entregarlo a los usuarios por correo electrónico junto con la tarjeta digital de empresa.

## Requisitos previos

Antes de configurar Wallet, asegúrate de lo siguiente:

- Tienes acceso desde un Vcards team.
- Tienes permisos de edición en el Enterprise.
- La funcionalidad Wallet está activada para el equipo.

## Confirmar que Wallet está activado

Revisa el área de Enterprise Features y confirma que Wallet está activado antes de editar cualquier ajuste del pase.

[![Wallet enabled](https://help.tictapcards.com/uploads/images/gallery/2026-07/scaled-1680-/fjo3eDBomt2wYhQr-image-1783500160683.jpg)](https://help.tictapcards.com/uploads/images/gallery/2026-07/fjo3eDBomt2wYhQr-image-1783500160683.jpg)

Si Wallet no está activado, la configuración de Enterprise aún no está lista y los ajustes del pase no estarán disponibles.

## Abrir los ajustes de Pkpass

Desde la vista de administración de Enterprise, abre la página de ajustes de Wallet.

[![Enterprise Pkpass configuration](https://help.tictapcards.com/uploads/images/gallery/2026-07/scaled-1680-/lymCfGjk0zVa4Dnv-image-1783500375673.jpg)](https://help.tictapcards.com/uploads/images/gallery/2026-07/lymCfGjk0zVa4Dnv-image-1783500375673.jpg)

Esta sección solo es visible cuando la funcionalidad Wallet está activada para el Enterprise actual y tu usuario tiene permiso para editar la configuración de Enterprise. En la mayoría de los casos, llegarás a ella desde el área principal de configuración de Enterprise, donde Wallet aparece como un bloque de configuración dedicado.

[![Pkpass configuration](https://help.tictapcards.com/uploads/images/gallery/2026-07/scaled-1680-/dcCvHKAITlDlII3H-image-1783500506250.jpg)](https://help.tictapcards.com/uploads/images/gallery/2026-07/dcCvHKAITlDlII3H-image-1783500506250.jpg)


Abre ese bloque para revisar la configuración actual antes de hacer cambios. Si la sección no aparece, verifica primero el estado de la funcionalidad y tu nivel de acceso.

## Configurar Wallet

[![Pkpass edition](https://help.tictapcards.com/uploads/images/gallery/2026-07/scaled-1680-/egUzoD4zfNpPueNQ-image-1783500404958.jpg)](https://help.tictapcards.com/uploads/images/gallery/2026-07/egUzoD4zfNpPueNQ-image-1783500404958.jpg)

### Información general

Completa la información básica que identifica el pase.

| Campo | Descripción |
| --- | --- |
| Organization Name | Nombre que se mostrará como emisor del pase. |
| Description | Breve descripción del contenido del Wallet. |

### Colores

Elige los colores que se aplicarán al pase.

| Campo | Descripción |
| --- | --- |
| Background Color | Color principal de fondo del pase. |
| Foreground Color | Color principal del texto y del contenido. |
| Label Color | Color usado para las etiquetas y el texto secundario. |

Usa combinaciones legibles y mantén suficiente contraste entre el fondo y el texto.

### Imágenes

Añade las imágenes que usará el pase para que la vista previa y la tarjeta final en Wallet se mantengan coherentes.

| Recurso | Requerido | Propósito |
| --- | --- | --- |
| Logo | No | Imagen principal de la marca que se muestra en el pase. |
| Icon | Sí | Icono pequeño y cuadrado requerido por Apple Wallet. |
| Background | No | Imagen de fondo grande para el pase. |
| Thumbnail | No | Imagen de apoyo pequeña que se muestra en el diseño. |

Usa recursos @2x siempre que sea posible para que el resultado se vea nítido en pantallas de alta densidad.

[![Ejemplo de ticket de evento](https://help.tictapcards.com/uploads/images/gallery/2026-07/scaled-1680-/nnFqX7uRDIByhML4-image-1783500432800.png)](https://help.tictapcards.com/uploads/images/gallery/2026-07/nnFqX7uRDIByhML4-image-1783500432800.png)

El ejemplo `Wallet-layout-example-2x.png` muestra el diseño esperado y las áreas de colocación de los elementos principales del pase.

Apple Wallet aplica automáticamente un desenfoque a `background.png`, así que la imagen original debe diseñarse teniendo en cuenta ese efecto.

### Tamaños recomendados

Usa los siguientes tamaños para obtener los mejores resultados.

| Archivo | @1x | @2x |
| --- | --- | --- |
| `icon.png` | 29x29 | 58x58 |
| `logo.png` | max 160x50 | 320x100 |
| `background.png` | 180x220 | 360x440 |
| `thumbnail.png` | 90x90 | 180x180 |

### Colocación de las imágenes

Coloca cada imagen en el área asignada por la plantilla Wallet. Mantén el contenido principal alejado de los bordes para que siga siendo legible en las vistas previas de Wallet y en dispositivos móviles.

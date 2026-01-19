# ProyectoReconocimientoFacialADMG

## Stack tecnológico

### Frontend (facial-auth-frontend)
- Vite (React) como bundler y servidor de desarrollo.
- React y React DOM para la interfaz.
- React Router DOM para enrutamiento.
- Axios para consumo de APIs.
- React Hook Form para manejo de formularios.
- React Toastify para notificaciones.
- React Modal para modales.
- React Icons para iconografía.
- Tailwind CSS (vía plugin de Vite) para estilos.

### Backend (facial-auth-app)
- Python con Django como framework web.
- Django REST Framework para APIs.
- SimpleJWT para autenticación JWT.
- Django CORS Headers para configuración de CORS.
- Pillow, OpenCV (headless) y NumPy para procesamiento de imágenes.
- TensorFlow (CPU) + TensorFlow Hub para modelos de IA.
- Scikit-learn para métricas de similitud.
- Whitenoise y Gunicorn para despliegue.
- dj-database-url, psycopg2 y dotenv para configuración y conexión a bases de datos.

### Modelos de IA y reconocimiento facial
- Detector de rostro: Faster R-CNN (ResNet101) desde TensorFlow Hub.
- Modelo de embeddings: InceptionResNetV2 (feature vector) desde TensorFlow Hub.

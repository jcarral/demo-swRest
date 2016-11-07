# demo-swRest

Demo de servicio rest para la asignatura de sistemas web

| Verbo  | Path        | Parametros                                        | Respuesta                                       |
|--------|-------------|---------------------------------------------------|-------------------------------------------------|
| GET    | /api/check  | correo: String                                    | {message: 'Correo valido' or 'Correo inválido'} |
| POST   | /api/check  | {correo: String}                                  | {message: 'Correo valido' or 'Correo inválido'} |
| DELETE | /api/delete | {correo: String}                                  | {message: 'Usuario eliminado' or error: '' }    |
| PUT    | /api/add    | {estudiante: {correo: String, nombre: 'Nombre'} } | {message: 'Usuario añadido' or error: '' }      |

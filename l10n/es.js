OC.L10N.register(
    "integration_google",
    {
    "Missing refresh token in Google response." : "Falta el token de refresco en la respuesta de Google.",
    "Error getting OAuth access token." : "Error al obtener el token de acceso OAuth.",
    "Error during OAuth exchanges" : "Error durante los intercambios OAuth",
    "Google" : "Google",
    "_%s photo was imported from Google._::_%s photos were imported from Google._" : ["Ha sido importada %s foto desde Google.","Han sido importadas %s fotos desde Google."],
    "_%s file was imported from Google Drive._::_%s files were imported from Google Drive._" : ["Ha sido importado %s archivo desde Google Drive.","Han sido importados %s archivos desde Google Drive."],
    "Bad credentials" : "Credenciales incorrectas",
    "OAuth access token refused" : "Token de acceso OAuth rechazado",
    "Google Calendar import" : "Importar Google Calendar",
    "Google Drive import" : "Importar Google Drive",
    "Google Photos import" : "Importar Google Photos",
    "Connected accounts" : "Cuentas conectadas",
    "Data migration" : "Migración de datos",
    "Google integration" : "Integración con Google",
    "Import Google data into Nextcloud" : "Importar los datos de Google a Nextcloud",
    "Google integration allows you to automatically import your Google calendars, contacts, photos and files into Nextcloud." : "La integración con Google te permite importar automáticamente todos tus calendarios, contactos, fotos y archivos de Google a Nextcloud.",
    "If you want to allow your Nextcloud users to authenticate to Google, create an OAuth application in your Google settings." : "Si quieres permitir a tus usuarios de Nextcloud que se autentiquen con Google, crea una aplicación OAuth en tu configuración de Google.",
    "Google API settings" : "Configuración de la API de Google",
    "Go to \"APIs & Services\" => \"Credentials\" and click on \"+ CREATE CREDENTIALS\" -> \"OAuth client ID\"." : "Ve a «APIs y servicios» => «Credenciales» y pulsa en «+ CREAR CREDENCIALES» -> «ID del cliente OAuth»",
    "Set the \"Application type\" to \"Web application\" and give a name to the application." : "Configura el «Tipo de aplicación » como «Aplicación web» y dale un nombre a la aplicación.",
    "Make sure you set one \"Authorized redirect URI\" to" : "Asegúrate de configurar una «URI de redirección autorizada» a",
    "Put the \"Client ID\" and \"Client secret\" below." : "Pon la «ID de cliente» y el «Secreto de cliente» a continación.",
    "Finally, go to \"APIs & Services\" => \"Library\" and add the following APIs: \"Google Drive API\", \"Google Calendar API\", \"People API\" and \"Photos Library API\"." : "Para terminar, ve a \"APIs y servicios\" => \"Biblioteca\" y añade las siguientes APIs: \"API de Google Drive\",  \"API de Google Calendar\", \"API de Personas\" y \"API de la biblioteca de fotos\".",
    "Your Nextcloud users will then see a \"Connect to Google\" button in their personal settings." : "Tus usuarios de Nextcloud verán un botón de \"Conectar con Google\" en su configuración personal.",
    "Client ID" : "ID de cliente",
    "Client ID of your Google application" : "ID de cliente de tu aplicación de Google",
    "Client secret" : "Secreto de cliente",
    "Client secret of your Google application" : "Secreto de cliente de tu aplicación de Google",
    "Google admin options saved" : "Opciones de administración de Google guardadas.",
    "Failed to save Google admin options" : "Fallo al crear las opciones de administración de Google",
    "Google data migration" : "Migración de datos de Google",
    "No Google OAuth app configured. Ask your Nextcloud administrator to configure Google connected accounts admin section." : "No hay ninguna app OAuth de Google configurada. Pide a tu administratdor de Nextcloud que configure la sección de administración de cuentas conectadas a Google.",
    "Authentication" : "Autentificación",
    "Connect to Google" : "Conectar con Google",
    "Connected as {user}" : "Conectado como {user}",
    "Disconnect from Google" : "Desconectar de Google",
    "Contacts" : "Contactos",
    "{amount} Google contacts" : "{amount} contactos de Google",
    "Import Google Contacts in Nextcloud" : "Importar Google Contacts a Nextcloud",
    "Choose where to import the contacts" : "Escoge dónde importar los contactos",
    "New address book" : "Nueva libreta de direcciones",
    "address book name" : "nombre de la libreta de direcciones",
    "Import in {name} address book" : "Importar en la libreta de direcciones {name}",
    "Calendars" : "Calendarios",
    "Import calendar" : "Importar calendario",
    "Photos" : "Fotos",
    "Ignore shared albums" : "Ignorar albumes compartidos",
    "Import Google photos" : "Importar fotos de Google",
    "Your Google photo collection size is estimated to be bigger than your remaining space left ({formSpace})" : "Estimamos que tu colección de fotos de Google es mayor que tu espacio disponible ({formSpace})",
    "Cancel photo import" : "Cancelar importación de fotos",
    "Drive" : "Drive",
    "Ignore shared files" : "Ignorar archivos compartidos",
    "Import Google Drive files" : "Importar archivos de Google Drive",
    "Your Google Drive is bigger than your remaining space left ({formSpace})" : "Tu Google Drive es mayor que tu espacio disponible ({formSpace})",
    "Cancel Google Drive import" : "Detener importación de Google Drive",
    "Photo import background process will begin soon." : "El proceso de importación de fotos en segundo plano comenzará pronto.",
    "Last photo import job at {date}" : "Última tarea de importación de fotos a las {date}",
    "You can close this page. You will be notified when it finishes." : "Puedes cerrar esta página. Se te notificará cuando termine.",
    "Google Drive background import process will begin soon." : "El proceso de importación en segundo plano de Google Drive comenzará pronto.",
    "Last Google Drive import job at {date}" : "El último trabajo de importación de Google Drive fue el {date}",
    "Successfully connected to Google!" : "¡Conectado a Google con éxito!",
    "Google connection error:" : "Error de conexión con Google:",
    "Google options saved" : "Opciones de Google guardadas",
    "Failed to save Google options" : "Fallo al guardar las opciones de Goolge",
    "Failed to save Google OAuth state" : "Fallo al guardar el estado OAuth de Google",
    "Failed to get Google Drive information" : "Fallo al obtener la información de Google Drive",
    "Failed to get calendar list" : "Fallo al obtener la lista de calendarios",
    "Failed to get number of Google photos" : "Fallo al obtener el número de fotos de Google",
    "Failed to get number of Google contacts" : "Fallo al obtener el número de contactos de Google",
    "Failed to get address book list" : "Fallo al obtener la lista de libretas de direcciones",
    "Failed to import Google calendar" : "Fallo al importar el calendario de Google",
    "Starting importing photos in {targetPath} directory" : "Comenzando la importación de fotos en el directorio {targetPath}",
    "Failed to start importing Google photos" : "Fallo al iniciar la importación de las fotos de Google",
    "Starting importing files in {targetPath} directory" : "Comenzando la importación de archivos en el directorio {targetPath}",
    "Failed to start importing Google Drive" : "Fallo al empezar la importación de Google Drive",
    "_~{nbPhotos} Google photo (~{formSize})_::_~{nbPhotos} Google photos (~{formSize})_" : ["~{nbPhotos} foto de Google (~{formSize})","~{nbPhotos} fotos de Google (~{formSize})"],
    "_{nbFiles} file in Google Drive ({formSize} + {formSharedSize} shared with you)_::_{nbFiles} files in Google Drive ({formSize} + {formSharedSize} shared with you)_" : ["{nbFiles} archivo en Google Drive ({formSize} + {formSharedSize} compartido contigo)","{nbFiles} archivos en Google Drive ({formSize} + {formSharedSize} compartidos contigo)"],
    "_{nbFiles} file in Google Drive ({formSize})_::_{nbFiles} files in Google Drive ({formSize})_" : ["{nbFiles} archivo en Google Drive ({formSize})","{nbFiles} archivos en Google Drive ({formSize})"],
    "_{amount} file imported ({progress}%)_::_{amount} files imported ({progress}%)_" : ["{amount} archivo importado ({progress}%)","{amount} archivos importados ({progress}%)"],
    "_{number} contact successfully imported in {name}_::_{number} contacts successfully imported in {name}_" : ["{number} contacto importado con éxito en {name}","{number} contactos importados con éxito en {name}"],
    "_{number} event successfully imported in {name}_::_{number} events successfully imported in {name}_" : ["{number} evento importado con éxito en {name}","{number} eventos importados con éxito en {name}"]
},
"nplurals=2; plural=(n != 1);");

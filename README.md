# dockerhub image
sudo docker run -d -p 80:80 agallardogomez/docker-angular:v0
# Creamos primero nuestra clave y certificado (autofirmado).

openssl req -x509 -sha256 -nodes -newkey rsa:2048 -keyout ser.key -out ser.pem

# Rackets4All (r4all)  
  
## Proyecto del Grupo2 de EA (EETAC-UPC). Frontend de la aplicación en Ionic: WebApp + Mobile App.  
Aplicación de Partidos, Torneos y otros eventos relacionados con el Tenis.  
Podrás encontrar eventos y personas cerca de tu ubicación o según tus preferencias, chatear y quedar con ellos para participar   
en partidos amistosos o torneos organizados por clubs y otros organizadores. 

**Las imágenes contenidas en el directorio `/uploads` son para uso exclusivamente educativo**  
  
## INDICACIONES:  
para instalar ionic:  
"npm install -g @ionic/cli"  
  
Para empezar un proyecto  
"ionic start myApp tabs"  
  
Para iniciar servidor:  
"ionic serve"  
  
para crear paginas o componenetes....  
ionic generate component login-form --change-detection=OnPush  
ionic generate directive ripple --skip-import  
ionic generate page (nombre)  
ionic generate component (nombre)  
ionic generate service (nombre)  

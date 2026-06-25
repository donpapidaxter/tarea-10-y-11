db.createUser({
  user: "admin",
  pwd: "Admin123*",
  roles: [
    {
      role: "root",
      db: "admin"
    }
  ]
})


use("Gestion_Academica");

db.createUser({
    user: "docente",
    pwd: "Docente123*",
    roles: [
        {
            role: "readWrite",
            db: "gestion_academica"
        }
    ]
})

use("Gestion_Academica");
db.createUser({
  user: "coordinador",
  pwd: "coordinadorpass123*",
  roles:[
    {
      role: "dbAdmin", db: "Gestion_Academica"
    }
  ]

});

use('Gestion_Academica');

db.createUser({
  user: "auditor",
  pwd: "AuditorPass123*",
  roles: [
    { role: "read", db: "gestion_academica" } 
  ]
});

use('Gestion_Academica');
db.estudiantes.insertOne({
  carnet: "2026-SIS-099",
  nombres: "Pedro",
  apellidos: "Pérez"
});


use('Gestion_Academica');

db.getUsers();

use('Gestion_Academica');
db.estudiantes.find().toArray();

use('Gestion_Academica_recuperada'); 
db.estudiantes.insertMany([
  { "carnet": "2026-SIS-001", "nombres": "Brian", "apellidos": "Harrison" },
  { "carnet": "2026-SIS-002", "nombres": "Michael", "apellidos": "Harrison" }
]);


use('Gestion_Academica');
db.getUsers();


use('Gestion_Academica');
db.createRole({
  role: "modificadorDeNotas",
  privileges: [
    {
      resource: { db: "Gestion_Academica", collection: "calificaciones" },
      actions: [ "update", "find" ] 
    }
  ],
  roles: []
});

db.createUser({
  user: "profesor_asistente",
  pwd: "AsistentePass123*",
  roles: [ { role: "modificadorDeNotas", db: "Gestion_Academica" } ]
});
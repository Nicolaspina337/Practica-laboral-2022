// declaración sql
var sqlMap = {
    user: {
        // Agregar usuario
        add: 'insert into user(name, age) values (?, ?)',
        // consulta al usuario
        select: 'select * from user where name like "%"?"%"'
    },
    contactos: {
        add: 'insert into formulario(nombre, correo, descripcion) values (?, ?, ?)',
        get: 'select * from contactos'
    },
};

module.exports = sqlMap;
// declaración sql
var sqlMap = {
    contactos:{
        add: 'insert into comunicaciones(nombre_cliente, correo_cliente, descripcion) values (?, ?, ?)',
    }
};

module.exports = sqlMap;
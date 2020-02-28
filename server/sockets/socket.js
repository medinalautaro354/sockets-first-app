const {io} = require('../server');

io.on('connection', (client) =>{
    console.log('user conectado' + client);

    client.on('disconnect', () =>{
        console.log('user desconectado');
    });

    //escuchar cliente
    client.on('enviarMensaje', (data, callback) =>{
        //console.log(message);

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if(message.user){
        //     callback({
        //         resp: 'Todo salio bien'
        //     });

        // }else{
        //     callback({
        //         resp: 'Salio mal.'
        //     });
        // }
    });

    client.emit('enviarMensaje', {
        user:'Admin',
        message: 'Bienvenido a la app'
    });
});
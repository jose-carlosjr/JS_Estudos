// FUNÇÃO ASSÍNCRONA QUE RECEBE OS DADOS DE UM USUÁRIO ATRAVÉS DO ID
function buscarDadosUsuario(id, callback) {
    setTimeout(() => {
        let user01 = {
            id: id,
            name: 'José',
            Age: '24',
            email: 'example123@gmail.com'
        }

        callback(null, user01)
    }, 3000);
}

buscarDadosUsuario('02', function(erro, usuario) {
    if(erro) {
        console.log('Deu erro:', erro)
    } else {
        console.log('Usuário:', usuario)
    }
})
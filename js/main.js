for (i=0; i<10; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((paperino =>{
        console.log(paperino.data)
    } ))
}

    
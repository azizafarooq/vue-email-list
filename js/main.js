const { createApp } = Vue;
const app = createApp({
    data() {
      return {
        title: "Random Emails",
        emails:[],
      }
    },
    created(){
        for (i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((paperino =>{
                this.emails.push(paperino.data.response);
            } ))
        }
    }
});
  
app.mount('#app');
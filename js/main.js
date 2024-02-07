const { createApp } = Vue;
const app = createApp({
    data() {
      return {
        title: "Random Emails",
        emails:[],
        requiredEmails: 10,
      }
    },
    created(){
        for (i=0; i<this.requiredEmails; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((paperino =>{
                this.emails.push(paperino.data.response);
            } ))
        }
    }
});
  
app.mount('#app');
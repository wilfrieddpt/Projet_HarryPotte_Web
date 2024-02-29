<template>
    <header>
     <p> menu </p>
     </header>
     <div v-if="data">
      <div v-for="(character, index) in data" :key="index">
        <p>{{characters}}</p>
      </div>
    </div>
    <div v-else>
      <p> Loading...</p>
    </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'PagePersonnages',
  data(){
    return{
      data: null,
    };
  },
  created(){
    api.get ('https://api.potterdb.com/v1/characters')
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>
<template>
    <header>
      <ul>
        <li><router-link to="/Personnages">Personnages</router-link></li>
        <li><router-link to="/Livres">Livres</router-link></li>
        <li><router-link to="/Potions">Potions</router-link></li>
        <li><router-link to="/Sorts">Sorts</router-link></li>
      </ul> 
    </header>
</template>

<script>
export default{
  name: 'PageAccueil'
};
</script>
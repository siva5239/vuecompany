<template>
 <div>
  <HelloWorld />
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
     

    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
        <b>Contacts</b>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <!-- <a class="dropdown-item" href="#">View Companies</a>
          <a class="dropdown-item" href="#">Add Companies</a> -->
            <router-link  class="dropdown-item nav-link"  to="/getcontactdata" >View Contacts</router-link>
           <router-link class="dropdown-item nav-link" to="/addcontactdata">AddContacts</router-link>  
         
          <!-- <a class="nav-link" href="#">Import Companies</a> -->
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
         <b>Companies</b>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <!-- <a class="dropdown-item" href="#">View Companies</a>
          <a class="dropdown-item" href="#">Add Companies</a> -->
           <!-- <router-link class="nav-link" to="/company">Adddata</router-link> -->
           <router-link class="dropdown-item nav-link" to="/" >View Companies</router-link>
           <router-link class="dropdown-item nav-link" to="/addcompany">Add Company</router-link>
           <a class="dropdown-item nav-link" href="#">Import Companies</a>
        </div>
      </li>

      
    </ul>
   
  </div>
</nav>
   <!-- <router-link to="/company">Adddata</router-link>|
      <router-link to="/companyview">Getdata</router-link> -->
  <router-view />
 </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dropdown-item:hover{
  background-color: rgba(65,0,217,255);
  
}


</style>

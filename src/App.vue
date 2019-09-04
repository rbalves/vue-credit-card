<template>
  <v-app>
    <Header/>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Home from './components/Home';

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
};
</script>

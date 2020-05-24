<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Arrase"
          class="shrink mr-2"
          contain
          src="https://static.tvtropes.org/pmwiki/pub/images/the_laughing_man_logo.jpg"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-app-bar>

    <v-content>
      <SayWhat/>
    </v-content>
  </v-app>
</template>

<script>
import SayWhat from './components/SayWhat';

export default {
  name: 'App',

  components: {
    SayWhat,
  },

  data: () => ({
    //
  }),
};
</script>

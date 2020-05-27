<template>
  <v-app>
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

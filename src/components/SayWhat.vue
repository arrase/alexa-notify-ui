<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-12">
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Mensaje"
                name="msg"
                id="msg"
                type="text"
                v-model="msg"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-on:click="send_msg" id="send_btn" color="primary">Enviar</v-btn>
          </v-card-actions>
        </v-card>
        <p class="subheading font-weight-regular">
          API STATUS: {{ api_status }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'SayWhata',
    data () {
      return {
        api_status: null,
        msg: '',
        title: 'Say What'
      }
    },
    mounted () {
      const parsedUrl = new URL(window.location.href);
      const mode = parsedUrl.searchParams.get("mode")
      if (mode == 'door') {
        this.title = 'No estoy en casa, deja un mensaje'
      }

      axios
        .get('https://lvojx2rrq8.execute-api.eu-west-1.amazonaws.com/status')
        .then(response => (this.api_status = response.data))
    },
    methods: {
      send_msg() {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios
          .post('https://lvojx2rrq8.execute-api.eu-west-1.amazonaws.com/notify', { 'msg': this.msg })
          .catch(error => (this.api_status = error))
      }
    }
  }
</script>

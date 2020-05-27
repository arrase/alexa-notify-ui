<template>
  <v-container
    class="fill-height"
    fluid 
    >
    <v-row
      align="center"
      justify="center"
      >
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
                :label=msg_label
                name="msg"
                id="msg"
                type="text"
                v-model="msg"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-alert v-if="!isHidden" type="success" dense>Mensaje enviado.</v-alert>
            <v-spacer></v-spacer>
            <v-btn v-on:click="send_msg" id="send_btn" color="primary">Enviar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'

  axios.defaults.headers.post['Content-Type'] = 'application/json'
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

  export default {
    name: 'SayWhata',
    data () {
      return {
        api_status: null,
        msg: '',
        title: 'Dime algo',
        msg_label: 'Mensaje',
        isHidden: true
      }
    },
    mounted () {
      const parsedUrl = new URL(window.location.href)
      const mode = parsedUrl.searchParams.get("mode")

      if (mode == 'door') {
        this.title = 'He avisado a Juan de que estás aquí'
        this.msg_label = 'Déjale un mensaje si no está en casa'

        axios
          .post('https://lvojx2rrq8.execute-api.eu-west-1.amazonaws.com/notify', { 'msg': 'Hay alguien en la puerta' })
          .catch(error => (this.api_status = error))
      }
    },
    methods: {
      send_msg() {
        axios
          .post('https://lvojx2rrq8.execute-api.eu-west-1.amazonaws.com/notify', { 'msg': this.msg })
          .catch(error => (this.api_status = error))
        this.msg = ''
        this.isHidden = false
      }
    }
  }
</script>

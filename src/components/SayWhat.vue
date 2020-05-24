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
          <v-toolbar-title>Say What</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Message"
                name="msg"
                id="msg"
                type="text"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn id="send_btn" color="primary">Send</v-btn>
          </v-card-actions>
        </v-card>
        <p class="subheading font-weight-regular">
          Say what you want.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'SayWhat'
  }
</script>

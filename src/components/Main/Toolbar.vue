<template>
  <v-toolbar fixed>
    <v-toolbar-side-icon @click.native.stop="toggleDrawer()" dark></v-toolbar-side-icon>
    <v-btn
      icon
      dark
      @click.native.stop="toggleMinified()">
      <v-icon v-html="minified ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>
    <v-toolbar-title v-text="title"></v-toolbar-title>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      title: 'Vuetify.js'
    }
  },
  computed: {
    ...mapGetters({
      minified: 'minified',
      drawer: 'drawer'
    })
  },
  methods: {
    toggleMinified () {
      this.$store.commit('toggleMinified')
    },
    toggleDrawer () {
      this.$store.commit('toggleDrawer')
    }
  }
}
</script>

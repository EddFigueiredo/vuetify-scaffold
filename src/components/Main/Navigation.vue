<template>
  <v-navigation-drawer
  persistent
  clipped
  :mini-variant="minified"
  v-model="drawer"
  enable-resize-watcher >
    <v-list class="pa-0">
      <v-list-tile
      value="true"
      v-for="(item, i) in items"
      :key="i" >
        <v-list-tile-action>
          <v-icon dark v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      minified: 'minified',
      drawer: 'drawer',
      items: 'items'
    })
  }
}
</script>

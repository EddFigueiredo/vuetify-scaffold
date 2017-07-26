<template>
  <v-app dark>
    <navigation></navigation>
    <toolbar></toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <img src="/static/v.png" alt="Vuetify.js" class="mb-5">
            <blockquote>
              &#8220;First, solve the problem. Then, write the code.&#8221;
              <footer>
                <small>
                  <em>&mdash;John Johnson</em>
                </small>
              </footer>
            </blockquote>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </main>
    <v-footer fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from '@/components/Main/Navigation'
import Toolbar from '@/components/Main/Toolbar'

export default {
  data: () => {
    return {
    }
  },
  components: {
    Navigation,
    Toolbar
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

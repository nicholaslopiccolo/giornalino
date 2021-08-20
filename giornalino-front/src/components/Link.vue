<template>
  <v-container>
    <v-card id='id'>
      <v-card-title>
        <h1 class="display-1">
          <a class="link" :href="link.url" target="_blank">{{link.url}}</a>
        </h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        {{link.description}}
      </v-card-text>
      <v-card-actions>
        <v-chip class="ma-2 secondary" v-for="tag in link.tags" :key="tag">
          {{tag}}
        </v-chip>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<style>
  a.link {
    color: #383838 !important;
  }

  a.link:hover {
    color: #383838d5 !important;
  }
</style>

<script>
  export default {
    name: 'Link',
    props: ['link', 'id'],

    data: () => ({
    }),
  }
</script>
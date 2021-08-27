<template>
  <v-app>
    <v-app-bar dark app>
      <v-toolbar-title>
        <v-icon>{{appIcon}}</v-icon>
        {{appName}}
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn href="#form" text rounded>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn href="#links" text rounded>
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <Form id="form" v-on:addLink="addLink"></Form>
      <v-card>
        <v-card-text>
          <Link id="links" v-for="(link,i) in links" :key=i :link=link>
          </Link>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
  import Form from './components/Form.vue';
  import Link from './components/Link.vue';
  import axios from 'axios';

  export default {
    name: 'App',

    components: {
      Form,
      Link
    },
    mounted(){
      this.$on('addLink',)

      axios('/links')
      .then(res=>{
        console.log(res);
        let links = res.data;
        links.map(link=>{this.links.push(link)})
      })
      .catch(err=>{
        console.error(err)
      })
    },
    data: () => ({
      appIcon: 'mdi-newspaper-variant-outline',
      appName: 'Giornalino',
      links: [{
          url: 'https://www.someurl.it/idk/what/to/say',
          description: 'Long Long long long description long long Long Long....',
          tags: ['Cat1', 'Cat2', 'Cat3', 'Cat4']
        }
      ]
    }),
    methods:{
      addLink(link){
        console.log('event Received')
        console.log(link)
        this.links.push(link);
      }
    }
  };
</script>
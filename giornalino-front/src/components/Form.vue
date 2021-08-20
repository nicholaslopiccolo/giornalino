<template>
  <v-container :id="id">
    <v-card>
      <v-card-text>
        <v-form v-model="valid" lazy-validation>
          <v-text-field label="Link" v-model="url" type="url" prepend-icon="mdi-link"></v-text-field>
          <v-textarea label="Descrizione" v-model="description" prepend-icon="mdi-card-text-outline"></v-textarea>
          <section>
            <b-field label="Add tags" custom-class="is-small">
              <b-taginput icon="label" v-model="tags" ellipsis maxtags="4" placeholder="Add a tag"
                type="is-dark" aria-close-label="Delete this tag" class="is-red">
              </b-taginput>
            </b-field>
          </section>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn dark block @click="addLink()">Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Form',
    propos: ['id'],

    data: () => ({
      valid: true,
      search: '',

      url: '',
      description: '',
      tags: []
    }),
    methods: {
      updateTags() {
        console.log('update')
        if (this.tags.length < 4) {
          this.tags.push(this.search);
        }
        this.search = "";
      },
      addLink() {
        let link = {
          url: this.url,
          description: this.description,
          tags: this.tags
        }

        axios.post('/links', link)
          .then(() => {
            this.$emit('addLink', link);
          })
      }
    }
  }
</script>
<template>
    <div>
        <top />
        <main class="container">
            <row>
                <div class="col s12">
                    <markdown-card :url="url" />
                </div>
            </row>
        </main>
    </div>
</template>
<script>
  const files = {
    'aim': 'Aim',
    'about': 'About',
    'opening': 'Opening',
    'librarian': 'Librarian'
  };

  export default{
    components: {
      top: require('../component/Header.vue'),
      row: require('../component/Row.vue'),
      'markdown-card': require('../component/MarkdownCard.vue')
    },
    data() {
      const {section} = this.$route.params;
      return {
        section
      }
    },
    computed: {
      url() {
        return `introduction/${files[this.section]}.txt`;
      }
    },
    watch: {
      '$route': function () {
        this.updateCard();
      }
    },
    methods: {
      updateCard() {
        const {section} = this.$route.params;
        if (!(section in files)) {
          this.$router.replace({name: 'home'});
        }
        this.section = section;
      }
    }
  }
</script>

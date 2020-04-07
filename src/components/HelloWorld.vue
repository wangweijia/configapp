<template>
  <Form />
</template>

<script>
import Form from './Form';

export default {
  components: {
    Form
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

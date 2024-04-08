<template>
  <span v-if="formattedText" v-html="formattedText"></span>
</template>

<script>
export default {
  props: {
    text: String
  },
  computed: {
    formattedText() {
      return Array.from(this.text).map(char => `<span>${char}</span>`).join('');
    }
  }
}
</script>

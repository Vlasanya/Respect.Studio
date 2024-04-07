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
      // Використовуємо Array.from, щоб правильно обробляти рядки з многобайтовими символами (наприклад, емодзі або деякі писемності)
      return Array.from(this.text).map(char => `<span>${char}</span>`).join('');
    }
  }
}
</script>

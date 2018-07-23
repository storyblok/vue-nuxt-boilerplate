<template>
  <div v-editable="blok" class="column feature">
    {{ blok.name }}
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

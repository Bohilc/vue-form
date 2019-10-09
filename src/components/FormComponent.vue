<template>
    <div>
        <form action="/" method="GET" @submit.prevent="onSubmit">
            <slot></slot>

          <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
  export default {
      data() {
          return {
              fields: []
          }
      },

      created() {
          this.fields = this.$children
      },

      methods: {
          onSubmit() {
              alert('submit')
          }
      }
  }
</script>

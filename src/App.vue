<template>
  <form action="/" @submit.prevent="onSubmit" @autocompleteerror="" @keydown="form.errorClear($event.target.name)">
    <input type="text" name="name" v-model="form.name">
    <br>
    <span v-text="form.errorGet('name')" v-if="form.errorHas('name')"></span>

    <br>

    <input type="text" name="description" v-model="form.description">
    <br>
    <span v-text="form.errorGet('description')" v-if="form.errorHas('description')"></span>
    <button type="submit" :disabled="form.errorAny()">Send</button>
  </form>
</template>

<script>
	// import FormComponent from "./components/FormComponent";
	import Form from "./components/form/Form"

	export default {
		name: 'app',

		components: {
			// FormComponent
		},

		data() {
			return {
				form: new Form({
					name: '',
					description: '',
				})
			}
		},

		methods: {
			onSubmit() {
				this.form.submit('get', '/test')
          .then(response => {})
          .catch(error => {console.log(error, 'test')})
			}
		}
	}
</script>

<style lang="scss">

</style>

<template>
  <sui-form 
    :error="form.errors.hasAny()" 
    @submit.prevent="login" 
    @keydown="form.onKeydown($event)"
    :loading="form.busy"
    >
    <sui-form-field :error="form.errors.has('email')">
        <label>Email</label>
        <input v-model="form.email" type="email" name="email" placeholder="Pass your login here"/>
        <has-error :form="form" field="email"/>
    </sui-form-field>
    <sui-form-field :error="form.errors.has('password')">
        <label>Password</label>
        <input v-model="form.password" type="password" name="password" placeholder="Password">
        <has-error :form="form" field="password"/>
    </sui-form-field>
    <sui-form-field>
        <sui-checkbox :inputValue="remember" label="Remember me"/>
    </sui-form-field>
    <sui-button size="big" primary type="submit">Sign in</sui-button>
    <a is="sui-button" primary size="big" class="link">Forgot your password?</a>
    <sui-segment basic align="center">
        Or sign in using social networks:
        <div is="sui-divider" hidden></div>
        <sui-button circular icon="facebook" size="big" social="facebook"></sui-button> 
        <sui-button circular icon="twitter" size="big" social="twitter"></sui-button>  
        <sui-button circular icon="vk" size="big" social="vk"></sui-button>
    </sui-segment>     
  </sui-form>
</template>

<script>
import Form from 'vform'

export default {
  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      this.$emit('logged')
      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      //this.$router.go(this.$i18n.path(''))
      //this.$router.push({ name: 'home' })
    }
  }
}
</script>


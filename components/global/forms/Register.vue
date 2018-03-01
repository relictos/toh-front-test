<template>
  <div>
    <sui-form-field>
        <label>Login</label>
        <input type="text" name="login" placeholder="Pass your login here">
    </sui-form-field>
    <sui-form-field>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password">
    </sui-form-field>
    <sui-form-field>
      <label>Country</label>
      <sui-dropdown
            fluid
            placeholder="Select Friend"
            selection
            :options="this.$store.getters['formdata/countries']"
            v-model="form.country"
        />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
          country: null
      }
    };
  }
}
</script>


<template>
  <div>
    <div class="field">
        <label>Login</label>
        <input type="text" name="login" placeholder="Pass your login here">
    </div>
    <div class="field">
        <label>Password</label>
        <input type="password" name="password" placeholder="Password">
    </div>
    <button class="ui primary big button" type="submit">Sign in</button>
    <button class="ui primary link button">Forgot your password?</button>
    <div class="ui center aligned basic segment">
        Or sign in using social networks:
        <div class="ui hidden divider"></div>
        <button class="circular ui icon facebook big button">
            <i class="facebook icon"></i>
        </button>   
    </div>     
  </div>
</template>

<style lang="less">
    .sign-in-button{

    }
</style>

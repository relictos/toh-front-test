<template>
  <section class="ui container">
    <div>
    <h2 class="title">
        Player {{$route.params.id}}
    </h2>
    </div>
  </section>
</template>

<script>

export default {
    transition: {
        name: 'fade',
    }
}

</script>

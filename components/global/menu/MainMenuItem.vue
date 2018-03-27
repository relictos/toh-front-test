<template>
    <nuxt-link :to="$i18n.path(link)" class="nav-item" :exact="exact">
        <div class="nav-item-icon-container">
            <i v-if="icon" class="icon-inline" :class="[icon]"></i>
        </div>
        <div class="nav-item-text">{{text}}</div>
    </nuxt-link>
</template>

<script>
export default {
    props: ['link', 'text', 'icon', 'exact']
}
</script>

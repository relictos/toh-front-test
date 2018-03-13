<template>
    <div class="user-dropdown-menu-item" v-bind:class="{'active': active}">
        <div class="item-icon-container">
            <i class="icon-inline" :class="[icon]"></i>
        </div>
        <div class="item-text">{{text}}</div>
        <div v-if="badgeCount && badgeCount > 0" class="item-badge" v-bind:class="{'active': badgeActive}">{{badgeCount}}</div>
    </div>
</template>

<script>
export default {
  name: 'UserMenuItem',
  props: [
    'text', 
    'icon', 
    'active',
    'badgeActive',
    'badgeCount'
    ]
}
</script>

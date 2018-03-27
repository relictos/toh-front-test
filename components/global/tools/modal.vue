<template>
    <div class="toh-modal-layout">
        <div>
            <div>
                <h2 v-for="i in 500" v-bind:key="i">123</h2>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .toh-modal-layout{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: white;
        overflow-y: auto;
    }
</style>

<script>
export default {
  name: 'Modal'
}
</script>

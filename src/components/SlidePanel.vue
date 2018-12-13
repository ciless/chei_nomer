<template lang="pug">
    .slide_panel
        button.close_panel(@click="closePanel") Закрыть
        sidebar.sidebar
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
    name: 'slide-panel',
    components: { Sidebar },
    methods: {
        closePanel() {
            this.$emit('closePanel', {});
        },
    },
};
</script>

<style lang="scss" scoped>
.sidebar {
    margin-top: 20px;
}

.close_panel {
    margin-left: auto;
    margin-top: 20px;
    border: none;
    outline: none;
    background: none;
    color: #e66767;
    border: 2px solid #e66767;
    padding: 0.5rem 1rem;
    border-radius: 20em;
    transition: all 0.2s ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: #e66767;
        color: $white;
    }
}
</style>

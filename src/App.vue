<template lang="pug">
    #app
        slideout-panel
        app-header
        .main
            router-view.view
            sidebar.app_sidebar
        app-footer
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
    components: { AppHeader, AppFooter, Sidebar },
};
</script>

<style lang="scss">
#app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    background-color: $background--color;
}

.slide_panel {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.main {
    max-width: 1400px;
    margin: auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;

    .view {
        width: 100%;
        margin-right: 20px;
    }
}

@media (max-width: 1046px) {
    .app_sidebar {
        display: none;
    }
    .view {
        margin-right: 0 !important;
    }
}

@media (max-width: 400px) {
    .slide_panel {
        width: 100% !important;
    }
}
</style>

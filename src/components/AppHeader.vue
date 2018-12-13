<template lang="pug">
    header.app_header
        .app_header_inner
            router-link(:to="{name: 'info'}").logotype_wrapper
                .title Чей номер?
                p.description Самая полная база номеров
            button.find_phone(@click="showPanel") Найти номер
</template>

<script>
import SlidePanel from './SlidePanel.vue';

export default {
    name: 'app-header',
    components: { SlidePanel },
    methods: {
        showPanel() {
            this.$showPanel({
                component: SlidePanel,
                cssClass: 'slide_panel',
                hidebg: true,
                openOn: 'right',
                width: 400,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.app_header {
    background: linear-gradient(
        45deg,
        $accent--color,
        lighten($accent--color, 10%)
    );
    .app_header_inner {
        max-width: 1400px;
        margin: auto;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.logotype_wrapper {
    display: inline-flex;
    align-items: center;
    padding: 0.1rem 1rem;
    border: 2px solid $line--color;
    border-radius: 3px;
    align-items: center;
    text-decoration: none;

    .title {
        position: relative;
        font-size: 1.4rem;
        color: $white;
        font-weight: 400;
        letter-spacing: 1px;
        &::after {
            position: absolute;
            content: '';
            width: 1px;
            background-color: $line--color;
            right: -6px;
            bottom: -12px;
            top: -12px;
        }
    }
    .description {
        color: $white;
        font-weight: 300;
        font-size: 0.9rem;
        margin-left: 15px;
    }
}

.find_phone {
    display: none;
    border: none;
    outline: none;
    background: none;
    background: $white;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    padding: 1rem 2rem;
    border-radius: 20em;
    color: $dark--color;
    opacity: 0.9;
    font-weight: 800;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
}

@media (max-width: 1046px) {
    .find_phone {
        display: block;
    }
}

@media (max-width: 450px) {
    .app_header_inner {
        flex-direction: column !important;
    }
    .find_phone {
        margin-top: 20px;
    }
}
</style>

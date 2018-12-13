<template lang="pug">
    section.info_section
        .section_header(@click="hideContent")
            h2.section_title {{ title }}
        transition(name="slide-fade")
            slot(v-if="!isHide")
</template>

<script>
export default {
    name: 'info-section',
    props: {
        title: String,
        show: Boolean,
    },

    data() {
        return {
            isHide: !this.show,
        };
    },

    methods: {
        hideContent() {
            this.isHide = !this.isHide;
        },
    },
};
</script>

<style lang="scss" scoped>
.info_section {
    transition: all 0.2s ease-in-out;
}
.section_header {
    cursor: pointer;
}

.section_title {
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.0625rem;
    padding: 0 0 0.5rem 0;
    border-bottom: 0.125rem solid #ebebeb;
}

.slide-fade-enter-active {
    transition: all 0.3s ease;
}
.slide-fade-leave-active {
    transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>

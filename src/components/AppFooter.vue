<template lang="pug">
    footer.app_footer
        .app_footer_inner
            span.site_link_wrapper
                a.site_link(href="https://cheinomer.ru") Чей номер | Самая полная база номеров
            span.copy
                | Все права защищены &copy 2016-2017 CheiNomer.ru РОССВЯЗЬ / Роскомнадзор

</template>

<script>
export default {
    name: 'app-footer',
};
</script>

<style lang="scss" scoped>
.app_footer {
    margin-top: 40px;
    background: $white;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    padding: 1.2rem;
}

.app_footer_inner {
    max-width: 1400px;
    margin: auto;
}
.site_link_wrapper {
    display: block;
    line-height: 2;
    .site_link {
        text-decoration: none;
        color: $accent--color;
        font-weight: 800;
    }
}
.copy {
    display: block;
    line-height: 2;
    font-weight: 300;
}
</style>

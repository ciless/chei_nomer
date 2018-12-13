<template lang="pug">
    aside.sidebar
        .sidebar_inner
            .new_search.category
                span.category_title Найти номер
                sidebar-search.sidebar_search
            .subscribers.category
                span.category_title Количество абонентов
                subscribers(:operators="operators" update="10.12.2017")
            .last_numbers.category
                span.category_title Последние номера
                last-numbers(:numbers="numbers")
</template>

<script>
import SidebarSearch from './SidebarSearch.vue';
import Subscribers from './Subscribers.vue';
import LastNumbers from './LastNumbers.vue';

export default {
    name: 'sidebar',
    components: { SidebarSearch, Subscribers, LastNumbers },
    data() {
        return {
            operators: [
                {
                    name: 'МТС',
                    count: '77 300 000',
                },
                {
                    name: 'МЕГАФОН',
                    count: '74 500 000',
                },
                {
                    name: 'Вымпелком',
                    count: '57 600 000',
                },
                {
                    name: 'Теле2',
                    count: '38 400 000',
                },
                {
                    name: 'МОТИВ',
                    count: '2 440 000',
                },
                {
                    name: 'СМАРТС',
                    count: '57 900',
                },
            ],
            numbers: [
                '74932591751',
                '78005057634',
                '73433394079',
                '79274135663',
                '79615149534',
                '74232620232',
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.sidebar {
    .sidebar_inner {
        background: $white;
        box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
        border-radius: 0.375rem;
        overflow: hidden;
        text-decoration: none;
        color: $text--color;
        padding: 20px;
    }
}

.category {
    &:not(:last-child) {
        margin-bottom: 20px;
    }
    .category_title {
        display: inline-block;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 0.0625rem;
        padding: 0 0 0.25rem 0;
        border-bottom: 0.125rem solid #ebebeb;
        margin-bottom: 20px;
    }
}
</style>

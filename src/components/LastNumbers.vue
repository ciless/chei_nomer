<template lang="pug">
    ul.last_numbers
        li.last_number(v-for="(number, index) in numbers" :key="index")
            router-link.last_number_link(:to="{name: 'phone', params: {phone: number}}") {{ number }}
</template>

<script>
export default {
    name: 'last-numbers',
    props: {
        numbers: Array,
    },
};
</script>

<style lang="scss" scoped>
.last_numbers {
    margin: 0;
    padding: 0;
    list-style: none;
}

.last_number {
    font-weight: 300;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
    .last_number_link {
        text-decoration: none;
        color: $text--color;
        &:hover {
            color: $accent--color;
        }
    }
}
</style>

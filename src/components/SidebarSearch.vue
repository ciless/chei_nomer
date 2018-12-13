<template lang="pug">
    .sidebar_search
        the-mask.search_field(:mask="['+7 (###) ###-##-##']" placeholder="Введите номер" v-model="phone")
        router-link(v-ripple :to="{name: 'phone', params: {phone: `7${phone}`}}").search_submit Найти
</template>

<script>
export default {
    name: 'sidebar-search',
    data() {
        return {
            phone: '',
        };
    },
};
</script>

<style lang="scss" scoped>
.sidebar_search {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search_field {
    border: none;
    outline: none;
    background: none;
    border: 2px solid $line--color;
    border-radius: 20em;
    padding: 0.7rem 1rem;
    font-weight: 300;
    letter-spacing: 2px;
    &::placeholder {
        font-size: 14px;
    }
}

.search_submit {
    text-decoration: none;
    border: 2px solid $accent--color;
    color: $accent--color;
    border-radius: 20em;
    padding: 0.7rem 1rem;
    letter-spacing: 2px;
    margin-left: 20px;
    transition: all 0.1s ease-in-out;
    &:hover {
        background-color: $accent--color;
        color: $white;
    }
}
</style>

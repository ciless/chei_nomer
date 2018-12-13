<template lang="pug">
    .subscribers
        .line(v-for="(operator, index) in operators" :key="index")
            span.operator {{ operator.name }}
            span.count {{ operator.count }}
        span.base_update Версия базы от {{ update }}
</template>

<script>
export default {
    name: 'subscribers',
    props: {
        operators: Array,
        update: String,
    },
};
</script>

<style lang="scss" scoped>
.subscribers {
    .line {
        position: relative;
        &:not(:last-child) {
            margin-bottom: 15px;
        }
        .operator {
            font-weight: 800;
        }
        .count {
            font-weight: 300;
            position: absolute;
            left: 130px;
        }
    }
}

.base_update {
    display: block;
    margin-top: 20px;
    font-weight: 400;
    color: $accent--color;
}
</style>

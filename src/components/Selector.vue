<template lang="pug">
    .selector
        h4.selector_title Если знаете чей номер {{ phone }}, намекните нам. Это поможет многим людям.
        ul.bubbles
            li.bubble(v-if="bubble.count" v-for="(bubble, index) in bubbles" :key="index")
                button.bubble_toggle(@click="bubbleClick($event)") {{ bubble.name }}
                    .toggles(v-if="bubble.count") {{ bubble.count }}

</template>

<script>
export default {
    name: 'selector',
    props: {
        phone: String,
        bubbles: Array,
    },
    data() {
        return {
            clicked: false,
            moreBubbles: true,
        };
    },
    computed: {
        moreOrLess() {
            return this.moreBubbles ? 'Больше' : 'Меньше';
        },
    },
    methods: {
        bubbleClick(event) {
            if (!this.clicked) {
                console.log(event);
                this.clicked = true;
            }
        },
        more() {
            this.moreBubbles = !this.moreBubbles;
        },
    },
};
</script>

<style lang="scss" scoped>
.selector_title {
    font-size: 0.9rem;
    color: $text--color;
}

.bubbles {
    margin: 0;
    padding: 0;
    margin-top: 30px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    .bubble {
        margin: 5px;
        .bubble_toggle {
            position: relative;
            border: none;
            outline: none;
            background: none;
            border: 1px solid $line--color;
            padding: 0.7rem;
            border-radius: 20em;
            transition: all 0.2s ease-in-out;
            font-weight: 300;

            .toggles {
                position: absolute;
                background-color: #e66767;
                padding: 0.4rem;
                border-radius: 20em;
                top: -16px;
                left: -5px;
                color: $white;
                font-size: 0.8rem;
                font-weight: 300;
            }

            &.more_bubbles {
                border: 1px solid $accent--color;
            }
        }
    }
}
</style>

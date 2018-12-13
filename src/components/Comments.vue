<template lang="pug">
    .comments_wrapper
        .make_feedback
            h4.make_feedback_title Оставить отзыв
            ul.selector
                li.bubble_wrapper(v-for="(bubble, index) in bubbles" :key="index")
                    button.bubble(v-ripple @click="toggleBubble(bubble, $event)" :style="{'border-color': bubble.color, 'color': bubble.color}") {{ bubble.name }}
            .make_feedback_plate
                h4.make_feedback_plate_title Ваш комментарий
                form(@submit.prevent).make_feedback_plate_form
                    input(type="text" placeholder="Ваше имя" value="Аноним" v-model="comment.name").change_name
                    textarea.change_comment(v-model="comment.body")
                    button.submit_comment(v-ripple @click="sendComment" v-if="toggled.bubble") Оставить комментарий
        .comments
            ul.comments_list
                li.comment(v-for="(comment, index) in comments" :key="index")
                    span.rate(:style="{'background': comment.color}") {{ comment.rate }}
                    span.name {{ comment.name }}
                    p.body {{ comment.body }}
                    span.date {{ comment.date }}
</template>

<script>
export default {
    name: 'make_feedback',
    props: {
        phone: String,
        bubbles: Array,
        comments: Array,
    },
    data() {
        return {
            toggled: {
                bubble: '',
                color: '',
            },
            comment: {
                name: '',
                body: '',
                rate: '',
                color: '',
            },
        };
    },
    methods: {
        toggleBubble(bubble, event) {
            this.toggled.bubble = bubble.name;

            const toggledBubble = document.getElementsByClassName('changed')[0];
            if (toggledBubble) {
                toggledBubble.classList.remove('changed');
                toggledBubble.style.background = 'none';
            }

            event.target.classList.toggle('changed');
            event.target.style.background = bubble.color;
            this.comment.rate = this.toggled.bubble;
            this.comment.color = bubble.color;
        },

        sendComment() {
            const currentDate = new Date();
            const date = `${currentDate.getDay()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`;
            this.comment.date = date;
            this.$emit('new-comment', this.comment);
        },
    },
};
</script>

<style lang="scss" scoped>
.make_feedback,
.comments {
    color: $text--color;
    padding: 20px;
    background: $white;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    border-radius: 0.375rem;
    overflow: hidden;
    margin-bottom: 40px;
}

.make_feedback_title {
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.0625rem;
    padding: 0 0 0.5rem 0;
    border-bottom: 0.125rem solid #ebebeb;
}

.selector {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    .bubble_wrapper {
        &:not(:last-child) {
            margin-right: 10px;
        }
        margin-bottom: 20px;
        .bubble {
            background: none;
            border: none;
            outline: none;
            font-weight: 300;
            border: 1px solid $line--color;
            padding: 0.6rem 0.5rem;
            border-radius: 20em;
            transition: all 0.2s ease-in-out;
            &.changed {
                border: 1px solid transparent !important;
                color: $white !important;
            }
            &:hover {
                cursor: pointer;
                border: 1px solid $accent--color;
            }
        }
    }
}

.make_feedback_plate {
    .make_feedback_plate_title {
        color: $accent--color;
    }
    .make_feedback_plate_form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .change_name {
            margin-bottom: 20px;
            border-radius: 20em;
            border: none;
            outline: none;
            background: none;
            border: 1px solid $line--color;
            padding: 0.5rem 1rem;
            color: $text--color;
            font-weight: 300;
            font-size: 14px;
            transition: all 0.2s ease-in-out;
            &:focus {
                border: 1px solid $accent--color;
            }
        }
        .change_comment {
            border: none;
            outline: none;
            background: none;
            border: 1px solid $line--color;
            padding: 10px;
            color: $text--color;
            font-weight: 300;
            font-size: 14px;
            transition: all 0.2s ease-in-out;
            width: 90%;
            height: 200px;
            border-radius: 5px;
            resize: none;
            &:focus {
                border: 1px solid $accent--color;
            }
        }
        .submit_comment {
            margin-top: 20px;
            border: none;
            outline: none;
            background: none;
            background-color: $accent--color;
            border-radius: 20em;
            padding: 0.8rem 1rem;
            font-weight: 300;
            color: $white;
            letter-spacing: 1px;
            &:hover {
                cursor: pointer;
            }
        }
    }
}

.comments {
    .comments_list {
        margin: 0;
        padding: 0;
        list-style: none;
        .comment {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            border: 1px solid $line--color;
            padding: 10px;
            border-radius: 5px;
            position: relative;
            &:first-child {
                margin-top: 20px;
            }
            margin-top: 40px;
            .rate {
                position: absolute;
                background-color: $accent--color;
                color: $white;
                border-radius: 20em;
                padding: 0.4rem 1rem;
                top: -15px;
                left: 0px;
                font-weight: 300;
                font-size: 14px;
            }
            .name {
                margin-top: 20px;
                font-weight: 800;
                color: $accent--color;
                margin-bottom: 20px;
                border-bottom: 2px solid $line--color;
                padding-bottom: 0.4rem;
            }
            .body {
                margin: 0;
                letter-spacing: 1px;
                font-size: 14px;
            }
            .date {
                font-weight: 300;
                margin-top: 20px;
            }
        }
    }
}
</style>

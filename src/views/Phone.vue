<template lang="pug">
    .phone
        .phone_inner
            h1.phone_title Информация о владельце номера телефона {{ $route.params.phone }}
            selector.selector(:phone="$route.params.phone" :bubbles="bubbles")
        h4.phone_region Регион номера: Россия, Российская Федерация

        info-section(title="Информация о номере" :show="true")
            p.paragraph Международный формат номера +79623651048 Россия, г. Москва и Московская область. Внутренний формат номера 89623651048, Оператор ОАО "Вымпел-Коммуникации". Данные определены по номерной емкости 89623600000 — 89623699999, приобретенной оператором: ОАО "Вымпел-Коммуникации"	в Федеральном агентстве связи (РОССВЯЗЬ).
        info-section(title="Информация о владельце" :show="true")
            .section_content
                p.paragraph Обладателем номера телефона +79623651048 может быть как физическое лицо, так и юридическое. Если вы брали кредит, но не смогли его выплатить, тогда это может быть банк, кредитная организация или коллекторское агентство. Как правило, должников уведомляют о просрочке и спрашивают о ее причинах. В некоторых случаях предлагают реструктуризацию долга (переоформление кредитного договора и увеличение срока).
                p.paragraph Кроме того, с этого номера могут звонить мошенники (в том числе, представляясь коллекторами и предлагая рефинансирование кредита). Это могут быть и специалисты колл-центров, которые проводят социологический или маркетинговую акцию, а также юридические и любые другие организации, которые получили доступ к вашему номеру.
                p.paragraph Если вас интересует, чей номер телефона +79623651048, вы сможете спросить об этом на сайте. Оставить комментарий можно ниже. Регистрация и авторизация не требуется. Вам обязательно ответят.
                p.paragraph Если вы владеете номером +79623651048, добавьте его описание в наш справочник. Если вы знаете точно, кто владеет телефоном, сообщите об этом нашим читателям. Это можно сделать, оставив комментарий или "маякнув", выбрав один из вариантов выше. Анонимность гарантирована.
        info-section(title="Информация о операторе" :show="true")
            .section_content
                .link
                    | Сайт оператора -
                    a.link(href="http://www.mtt.ru/")
                        | http://www.mtt.ru/
                p.paragraph
                    | МТТ (полное название ПАО «Межрегиональный ТранзитТелеком») – телекоммуникационная компания, мобильный и интернет-провайдер. На российском рынке телекоммуникационных услуг присутствует с 1994 года: сначала как оператор транзитных сетей подвижной радиосвязи, с 1999 года – в качестве альтернативного (Ростелекому) оператора дальней связи. Параллельно с развитием телекоммуникационных сетей компания выходит на рынок в качестве агрегатора для более чем трехсот сетей отечественных и более полусотни зарубежных мобильных сетей.
                    | Со дня основания до начала 2009 года половина акций МТТ принадлежала АФК «Система», крупнейшей российской финансово-промышленной группе. С 2009 года эти акции, вместе с пакетом 25% (владела оффшорная компания Danmax) были выкуплены «Промсвязькапиталом», который стал, таким образом, крупнейшим акционером МТТ – фактическим владельцем оператора. В 2013 году 100% акций компании приобрели структуры, аффилированные ВТБ.
                    | Примерно с 2009 года начинается резкий рост МТТ – как в качестве оператора мобильной связи, так и компании, оказывающей сопутствующие услуги для корпоративных и частных клиентов. В том числе и с использованием сторонней физической и программной инфраструктуры. Так, в 2010 году МТТ создал собственный бренд мобильного оператора «МТТ.Мобайл», а в 2011 году в распоряжение компании поступили номера телефонов (более 1 млрд.) от Международного союза электросвязи – не имеющие государственной или какой-либо зональной принадлежности.
                    | На конец 2016 года МТТ – это структура, которая объединяет своими услугами более 120 мобильных операторов и провайдеров в 46 странах.
        comments(:bubbles="bubbles" :comments="comments" @new-comment="addComment")
</template>

<script>
import Selector from '@/components/Selector.vue';
import Comments from '@/components/Comments.vue';
import InfoSection from '@/components/InfoSection.vue';

export default {
    name: 'phone',
    components: { Selector, InfoSection, Comments },
    data() {
        return {
            bubbles: [
                {
                    name: 'Положительно',
                    count: 0,
                    color: '#6ab04c',
                },
                {
                    name: 'Мошенник',
                    count: 1,
                    color: '#eb4d4b',
                },
                {
                    name: 'Реклама',
                    count: 0,
                    color: '#eb4d4b',
                },
                {
                    name: 'Оскорбление',
                    count: 2,
                    color: '#eb4d4b',
                },
                {
                    name: 'Коллектор',
                    count: 0,
                    color: '#eb4d4b',
                },
                {
                    name: 'Спам',
                    count: 0,
                    color: '#eb4d4b',
                },
                {
                    name: 'Опрос',
                    count: 0,
                    color: '#eb4d4b',
                },
                {
                    name: 'Другое',
                    count: 6,
                    color: '#30336b',
                },
            ],
            comments: [
                {
                    rate: 'Положительно',
                    color: '#6ab04c',
                    name: 'Константин',
                    body: 'Говно номер',
                    date: 'Сегодня',
                },
            ],
        };
    },
    methods: {
        addComment(comment) {
            const commentUnmodel = JSON.parse(JSON.stringify(comment));
            this.comments.unshift(commentUnmodel);
        },
    },
};
</script>

<style lang="scss" scoped>
.phone_inner {
    margin-bottom: 40px;
}

.phone_inner {
    color: $text--color;
    padding: 20px;
    background: $white;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    border-radius: 0.375rem;
    overflow: hidden;
}

.phone_title {
    font-size: 1.3rem;
    font-weight: 400;
    color: $accent--color;
}

.phone_region {
    font-size: 1rem;
    margin-bottom: 40px;
    color: $accent--color;
}

.info_title {
    font-size: 1.5rem;
    color: $text--color;
    margin-bottom: 40px;
}

.info_section {
    &:not(:last-child) {
        margin-bottom: 40px;
    }
    color: $text--color;
    padding: 20px;
    background: $white;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    border-radius: 0.375rem;
    overflow: hidden;

    .section_title {
        display: inline-block;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1;
        letter-spacing: 0.0625rem;
        padding: 0 0 0.5rem 0;
        border-bottom: 0.125rem solid #ebebeb;
    }
}

.paragraph {
    line-height: 1.4;
    color: $text--color;
    word-wrap: break-word;
    white-space: pre-line;
    max-width: 700px;
}

.marked_list,
.numbered_list {
    margin-top: 30px;
    .list_item {
        margin-bottom: 10px;
        letter-spacing: 0.5px;
        font-weight: 300;
        color: $accent--color;
    }
}

.strong_info {
    display: block;
    margin-top: 40px;
    color: $accent--color;
}

.link {
    text-decoration: none;
    color: $accent--color;
    margin-left: 10px;
}
</style>

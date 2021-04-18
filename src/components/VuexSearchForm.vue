<template>
    <div>
        test
    </div>
</template>

<script>
//datepicker:
import DatePicker from 'vuejs-datepicker';
import * as langs from 'vuejs-datepicker/src/locale';

export default {
    components: {
        DatePicker
    },
    data() {
        return {
            options: [
                //selection field (for available property of filter (store))
                { text: 'Yes', value: true},
                { text: 'No', value: false}
            ],
            //language by default is English
            languages: langs,
            lang: 'en'
        }
    },
    computed: {
        query: {
            get() {
                return this.$store.filter.query;
            },
            set(value) {
                //access setFilter mutation that modifies the data (query) with the value (value)
                this.$store.commit('setFilter', {
                    filter: 'query',
                    value
                });
            }
        },
        from: {
            get() {
                //(year, month, day)
                return new Date(this.$store.state.filter.from, 1, 1);
            },
            set(value) {
                //access setFilter mutation that modifies the data (from) with the value (value)
                this.$store.commit('setFilter', {
                    filter: 'from',
                    value: new Date(value).getFullYear()
                });
            }
        },
        to: {
            get() {
                //(year, month, day)
                return new Date(this.$store.state.filter.to, 1, 1);
            },
            set(value) {
                //access setFilter mutation that modifies the data (to) with the value (value)
                this.$store.commit('setFilter', {
                    filter: 'to',
                    value: new Date(value).getFullYear()
                });
            }
        },
        min_price: {
            get() {
                return this.$store.state.filter.min_price;
            },
            set(value) {
                //access setFilter mutation that modifies the data (min_price) with the value (value)
                this.$store.commit('setFilter', {
                    filter: 'min_price',
                    value: parseFloat(value)
                });
            }
        },
        max_price: {
            get() {
                return this.$store.state.filter.max_price;
            },
            set(value) {
                //access setFilter mutation that modifies the data (max_price) with the value (value)
                this.$store.commit('setFilter', {
                    filter: 'max_price',
                    value: parseFloat(value)
                });
            }
        },
        available: {
            get() {
                return this.$store.filter.available;
            },
            set(value) {
                //access setFilter mutation that modifies the data (available) with the value (value)
                this.$store.commit('setFilter', {
                    filter: 'available',
                    value
                });
            }
        }
    }
}
</script>
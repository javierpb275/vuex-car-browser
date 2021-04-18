<template>
    <div>
        <b-form>
            <b-row>
                <b-col>
                    <b-form-group
                        label="Query"
                        label-for="query"
                    >
                        <b-form-input
                            id="query"
                            v-model="query"
                            autocomplete="off"
                        >
                        </b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                        label="From"
                        label-for="from"
                    >
                        <date-picker
                            v-model="from"
                            id="from"
                            name="from"
                            :minimumView="'year'"
                            :maximumView="'year'"
                            :initialView="'year'"
                            :language="languages[lang]"
                            :format="'yyyy'"
                            :bootstrap-styling="true"
                        ></date-picker>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                        label="To"
                        label-for="to"
                    >
                        <date-picker
                            v-model="to"
                            id="to"
                            name="to"
                            :minimumView="'year'"
                            :maximumView="'year'"
                            :initialView="'year'"
                            :language="languages[lang]"
                            :format="'yyyy'"
                            :bootstrap-styling="true"
                        ></date-picker>
                    </b-form-group>
                </b-col>
            </b-row>
            
            <b-row>
                <b-col>
                    <b-form-group
                        label="Minimum Price"
                        label-for="min_price"
                    >
                        <b-form-input
                            id="min_price"
                            v-model="min_price"
                            type="number"
                            :step="1000"
                        >
                        </b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                        label="Maximum Price"
                        label-for="max_price"
                    >
                        <b-form-input
                            id="max_price"
                            v-model="max_price"
                            type="number"
                            :step="1000"
                        >
                        </b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                        label="Available?"
                        label-for="available"
                    >
                        <b-form-select
                            id="available"
                            :options="options"
                            v-model="available"
                        >
                        </b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-button
                        @click.prevent="resetFilter"
                        variant="danger"
                    >
                        Reset Filters
                    </b-button>
                </b-col>
            </b-row>

        </b-form>
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
                return this.$store.state.filter.query;
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
                return this.$store.state.filter.available;
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
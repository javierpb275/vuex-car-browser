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
    }
}
</script>
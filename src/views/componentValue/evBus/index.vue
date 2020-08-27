<template>
    <div>
        <page-title title="eventBus" />
        <div class="page-container">
            <Card dis-hover style="border:0">
                <brothersA />
            </Card>
            <Card style='margin-top:20px'>
              <brothersB />
            </Card>
        </div>
    </div>
</template>

<script>
import brothersA from './brothersA'
import brothersB from './brothersB'
import {EventBus} from '../../../EventBus'
export default {
    components: { brothersA ,brothersB},
    data() {
        return {
            name:'兄弟组件',
            loading: false,
        }
    },
    created() {

    },
    methods: {
        
    }
}
</script>

<style scoped>
.page-container {
    margin: 20px
}
</style>
<template>
    <div class="test">
        <div>
            hello
        </div>
        <div>
            message: {{ message }}
        </div>
        <div>
            double: {{ doubleCount }}
        </div>
        <button @click="add">add count</button>
    </div>
</template>
<script>
import {computed, ref} from 'vue'

export default {
    name: 'TestComponent',
    setup() {
        const message = 'hello world'

        // 将他变为响应式对象
        const count = ref(1)
        // 计算属性
        const doubleCount = computed(() => count.value * 2)
        const add = () => {
            count.value ++
        }
        return {
            message,
            doubleCount,
            add
        }
    }
}
</script>

<style lang="scss" scoped>
    .test {
        color: red;
    }
</style>

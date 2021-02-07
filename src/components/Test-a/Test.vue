<template>
    <div class="test">
        <div>
            test a
        </div>
        <div>
            message: {{ message }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'TestComponentA',
    data() {
        return {
            message: 'hello world'
        }
    }
}
</script>

<style lang="scss" scoped>
    .test {
        color: red;
    }
</style>

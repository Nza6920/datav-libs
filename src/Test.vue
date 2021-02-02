<template>
    <div class="test">
        {{ message }}
    </div>
</template>
<script>
export default {
    name: 'TestComponent',
    setup() {
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

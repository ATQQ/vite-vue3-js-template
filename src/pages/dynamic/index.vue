<template>
    <div>
        <h1>{{ $route.params.id }}</h1>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

// import HelloWorld from '../../components/HelloWorld.vue'

export default defineComponent({
  name: 'dynamic',
  components: {
    // HelloWorld,
  },
})
</script>

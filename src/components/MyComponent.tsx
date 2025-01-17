import { defineComponent } from 'vue'

const MyComponent = defineComponent({
  setup() {
    return () => (
      <div>
        <h1>Hello from TSX!</h1>
      </div>
    )
  },
})

export default MyComponent

// Import the generated style
import './styles/index'

// Import components
import Callout from './components/Callout.vue'
import Button from './components/Button.vue'

// Import the setup
import setup from './setup/main'

// Export the setup function and components
export default {
  setup,
  components: {
    Callout,
    StButton: Button
  }
} 
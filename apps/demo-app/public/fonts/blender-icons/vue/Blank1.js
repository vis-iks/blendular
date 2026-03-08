import { defineComponent, h } from 'vue';

export const Blank1 = defineComponent({
  name: 'Blank1',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    return () => h(
      'svg',
      {
        viewBox: '0 0 20 20',
        
        class: `bl-icons ${props.class}`,
        ...attrs
      },
      [
        
      ]
    );
  }
});

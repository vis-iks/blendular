import { defineComponent, h } from 'vue';

export const Underline = defineComponent({
  name: 'Underline',
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
        h('path', {"d": "M150 100c-67.616-1-67.616 100.956 0 100h150.781v397.266c0 219.985 129.782 400.769 350 401.172h100.2c220.199-.5 349.8-181.187 349.8-401.172V200H1250c67.616 1 67.616-100.956 0-100H850c-67.616-1-67.616 100.956 0 100h150.781v397.266c0 165.832-83.799 300.828-250.195 301.172h-99.805c-166.382-.3-250-135.34-250-301.172V200H550c67.616 1 67.616-100.956 0-100zm100 1100c-67.616-1-67.616 100.956 0 100h896.875c67.616 1 67.616-100.956 0-100z", "fillRule": "evenodd"})
      ]
    );
  }
});

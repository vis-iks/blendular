import { defineComponent, h } from 'vue';

export const SyntaxOn = defineComponent({
  name: 'SyntaxOn',
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
        h('path', {"d": "M100 99.998v800h1400v-800zm250.781 200h898.438c67.616-.96 67.616 100.956 0 100H350.781c-67.616.96-67.616-100.956 0-100m0 300h898.438c67.616-.96 67.616 100.956 0 100H350.781c-67.616.96-67.616-100.956 0-100M350.781 1099.998a50.005 50.005 0 1 0 0 100h898.438a50.005 50.005 0 1 0 0-100zm0 300a50.005 50.005 0 1 0 0 100h898.438a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"})
      ]
    );
  }
});

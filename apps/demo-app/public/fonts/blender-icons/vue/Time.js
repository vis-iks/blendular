import { defineComponent, h } from 'vue';

export const Time = defineComponent({
  name: 'Time',
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
        h('path', {"d": "M800 100c-386.01 0-700 313.99-700 700s313.99 700 700 700 700-313.99 700-700-313.99-700-700-700m296.094 199.804a100.01 100.01 0 0 1 104.102 98.633 100 100 0 0 1-20.899 62.305L921.68 804.297l160.742 241.015a100.01 100.01 0 1 1-166.406 110.938L724.805 869.336a100 100 0 0 1-26.367-68.164 100 100 0 0 1 .4-8.01 100 100 0 0 1 30.664-66.016l289.844-386.328a100.01 100.01 0 0 1 76.758-41.016z", "fillRule": "evenodd"})
      ]
    );
  }
});

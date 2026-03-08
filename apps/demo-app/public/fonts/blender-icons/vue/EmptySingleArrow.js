import { defineComponent, h } from 'vue';

export const EmptySingleArrow = defineComponent({
  name: 'EmptySingleArrow',
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
        h('path', {"d": "M449.219 100a49.98 49.98 0 0 0-34.571 14.647l-300 300c-49.023 47.127 23.577 119.727 70.704 70.704L400 270.702V1400H250c-67.616-1-67.616 100.956 0 100h400c67.616 1 67.616-100.956 0-100H500V270.702l214.648 214.65c47.127 49.022 119.727-23.578 70.704-70.705l-300-300A50.02 50.02 0 0 0 449.219 100", "fillRule": "evenodd"})
      ]
    );
  }
});

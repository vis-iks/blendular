import { defineComponent, h } from 'vue';

export const Add = defineComponent({
  name: 'Add',
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
        h('path', {"d": "M550.683 98.01a50.005 50.005 0 0 0-50.586 50.586V498.79H149.903a50.005 50.005 0 1 0 0 99.804h350.194V948.79a50.005 50.005 0 1 0 99.805 0V598.594h350.194a50.005 50.005 0 1 0 0-99.804H599.902V148.596a50.005 50.005 0 0 0-49.219-50.586", "fillRule": "evenodd"})
      ]
    );
  }
});

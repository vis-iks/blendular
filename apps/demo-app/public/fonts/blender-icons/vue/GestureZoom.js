import { defineComponent, h } from 'vue';

export const GestureZoom = defineComponent({
  name: 'GestureZoom',
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
        h('path', {"d": "m99.7 1500.163.634-500.231 199.332 199.784 100.214-99.572 100.144 99.836-99.79 100.057 199.845 199.857zM1500.137 100.275l-.07 499.763-199.896-199.881-100.45 99.903-99.743-99.836 100.19-99.823L999.924 99.978z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const MarkerHlt = defineComponent({
  name: 'MarkerHlt',
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
        h('path', {"d": "M548.233 101.323c-15.739.58-30.286 8.247-39.258 20.748l-400 555.29c-5.83 8.083-8.97 17.689-8.98 27.538v48.286c.003 26.667 22.387 48.283 50 48.286h800c27.999.002 50.544-22.195 50-49.23l-1-45.833c-.2-9.513-3.21-18.76-8.79-26.595L591.182 122.07c-9.71-13.536-25.903-21.356-42.945-20.748z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const DownarrowHlt = defineComponent({
  name: 'DownarrowHlt',
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
        h('path', {"d": "M149.549 99.769a50.005 50.005 0 0 0-34.961 85.938l400 400a50.005 50.005 0 0 0 70.704 0l400-400a50.005 50.005 0 1 0-70.704-70.704L549.94 479.652 185.292 115.003a50 50 0 0 0-35.743-15.234", "fillRule": "evenodd"})
      ]
    );
  }
});

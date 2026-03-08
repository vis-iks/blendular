import { defineComponent, h } from 'vue';

export const IpoEaseOut = defineComponent({
  name: 'IpoEaseOut',
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
        h('path', {"d": "M1450 100c-354.784 0-596.871 187.772-779.883 418.945-177.81 224.603-306.678 488.493-447.07 681.055H150a50.005 50.005 0 1 0 0 100h100a50 50 0 0 0 40.039-19.922c154.8-206.4 285.356-480.197 458.594-699.023S1129.784 200 1450 200a50.005 50.005 0 1 0 0-100", "fillRule": "evenodd"})
      ]
    );
  }
});

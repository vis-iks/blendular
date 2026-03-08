import { defineComponent, h } from 'vue';

export const ModOpacity = defineComponent({
  name: 'ModOpacity',
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
        h('path', {"d": "M1449.805 100.488a50.005 50.005 0 0 1 50 50v999.219a50.005 50.005 0 0 1-50 50h-999.61a50.005 50.005 0 0 1-50-50V150.488a50.005 50.005 0 0 1 50-50zm-50 100h-899.61v899.219h899.61z", "fillRule": "evenodd"}),
        h('path', {"d": "m600.195 500.293 449.61.2a50.005 50.005 0 0 1 50 50v449.8h-100V600.488l-399.61-.195zm-300 0v100l-100 .2v799.024h799.61v-99.224h100v149.219a50.005 50.005 0 0 1-50 50h-899.61a50.005 50.005 0 0 1-50-50V550.488a50.005 50.005 0 0 1 50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});

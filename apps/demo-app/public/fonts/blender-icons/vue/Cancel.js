import { defineComponent, h } from 'vue';

export const Cancel = defineComponent({
  name: 'Cancel',
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
        h('path', {"d": "M800 100c-386.008 0-700 313.991-700 700s313.992 700 700 700 700-313.991 700-700-313.992-700-700-700m299.023 298.633a100.01 100.01 0 0 1 71.68 172.07L941.406 800l229.297 229.297a100.01 100.01 0 1 1-141.406 141.406L800 941.406l-229.297 229.297a100.01 100.01 0 1 1-141.406-141.406L658.594 800 429.297 570.703a100.01 100.01 0 0 1 69.726-171.68 100 100 0 0 1 71.68 30.274L800 658.594l229.297-229.297a100 100 0 0 1 69.726-30.664", "fillRule": "evenodd"})
      ]
    );
  }
});

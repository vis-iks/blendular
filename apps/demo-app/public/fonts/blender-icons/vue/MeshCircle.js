import { defineComponent, h } from 'vue';

export const MeshCircle = defineComponent({
  name: 'MeshCircle',
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
        h('path', {"d": "M800 100c-386.012 0-700 313.988-700 700s313.988 700 700 700 700-313.988 700-700-313.988-700-700-700m0 100c331.968 0 600 268.032 600 600s-268.032 600-600 600-600-268.032-600-600 268.032-600 600-600", "fillRule": "evenodd"})
      ]
    );
  }
});

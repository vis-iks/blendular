import { defineComponent, h } from 'vue';

export const PropOff = defineComponent({
  name: 'PropOff',
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
        h('path', {"d": "M800 100c-386.007 0-700 313.993-700 700s313.993 700 700 700 700-313.993 700-700-313.993-700-700-700m0 100c331.963 0 600 268.037 600 600s-268.037 600-600 600-600-268.037-600-600 268.037-600 600-600", "fillRule": "evenodd"}),
        h('path', {"d": "M800 600c-109.865 0-200 90.135-200 200s90.135 200 200 200 200-90.135 200-200-90.135-200-200-200", "fillRule": "evenodd"})
      ]
    );
  }
});

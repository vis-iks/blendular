import { defineComponent, h } from 'vue';

export const WordwrapOff = defineComponent({
  name: 'WordwrapOff',
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
        h('path', {"d": "M150 100a50.005 50.005 0 0 0-50 50v1300a50.005 50.005 0 0 0 50 50h1300a50.005 50.005 0 0 0 50-50v-450h-100v400H200V200h1200v100h100V150a50.005 50.005 0 0 0-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M450 400c-67.616-.96-67.616 100.956 0 100h1050V400zm0 200c-67.616-.96-67.616 100.956 0 100h1050V600zm0 200c-67.616-.96-67.616 100.956 0 100h1050V800z", "fillRule": "evenodd"})
      ]
    );
  }
});

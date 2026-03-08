import { defineComponent, h } from 'vue';

export const ModMultires = defineComponent({
  name: 'ModMultires',
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
        h('path', {"d": "M150 100a50.005 50.005 0 0 0-50 50v1300a50.005 50.005 0 0 0 50 50h1300a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50zm50 100h1200v1200H200z", "fillRule": "evenodd"}),
        h('path', {"d": "M849.219 199.219A50.005 50.005 0 0 0 800 250v550H250a50.005 50.005 0 1 0 0 100h550v200H250a50.005 50.005 0 1 0 0 100h550v150a50.005 50.005 0 1 0 100 0v-150h200v150a50.005 50.005 0 1 0 100 0v-150h150a50.005 50.005 0 1 0 0-100h-150V900h150a50.005 50.005 0 1 0 0-100h-150V250a50.005 50.005 0 1 0-100 0v550H900V250a50.005 50.005 0 0 0-50.781-50.781M900 900h200v200H900z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const ModVertexWeight = defineComponent({
  name: 'ModVertexWeight',
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
        h('path', {"d": "M199.61 99.6v200h-100v400h100v200h200v-800zm1000 0v800h200v-200h100v-400h-100v-200zm-700 300v200h600v-200z", "fillRule": "evenodd"}),
        h('path', {"d": "M648.829 900.4a50.005 50.005 0 0 0-50 50v300.781a50.005 50.005 0 0 0 50 50H949.61a50.005 50.005 0 0 0 50-50V950.4a50.005 50.005 0 0 0-50-50zm50 100H899.61v200.781H698.829zm450.781 98.438a50.005 50.005 0 0 0-50 50v300.781a50.005 50.005 0 0 0 50 50h300.781a50.005 50.005 0 0 0 50-50v-300.781a50.005 50.005 0 0 0-50-50zm-1000 1.562a50.005 50.005 0 0 0-50 50v300a50.005 50.005 0 0 0 50 50h300a50.005 50.005 0 0 0 50-50v-300a50.005 50.005 0 0 0-50-50zm1050 98.438h200.781v200.781H1199.61zm-1000 1.562h200v200h-200z", "fillRule": "evenodd"})
      ]
    );
  }
});

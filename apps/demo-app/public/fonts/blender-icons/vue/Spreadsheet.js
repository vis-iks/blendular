import { defineComponent, h } from 'vue';

export const Spreadsheet = defineComponent({
  name: 'Spreadsheet',
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
        h('path', {"d": "M149.995 100a50.005 50.005 0 0 0-50 50v550h100V200h200V100zm750 0v100h700v500h100V150a50.005 50.005 0 0 0-50-50zm-800 1100v250a50.005 50.005 0 0 0 50 50h250v-100h-200v-200zm1500 0v200h-700v100h750a50.005 50.005 0 0 0 50-50v-250z", "fillRule": "evenodd"}),
        h('path', {"d": "M499.995 100h300v1400h-300zm-400 700h1600v300h-1600z", "fillRule": "evenodd"})
      ]
    );
  }
});

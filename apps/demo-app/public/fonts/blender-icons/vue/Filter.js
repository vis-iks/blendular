import { defineComponent, h } from 'vue';

export const Filter = defineComponent({
  name: 'Filter',
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
        h('path', {"d": "M1450 100.007a50.005 50.005 0 0 1 50 50v100a50 50 0 0 1-14.648 35.352L1000 770.709v379.298a50 50 0 0 1-14.648 35.352l-300 300A50.005 50.005 0 0 1 600 1450.007V770.71L114.648 285.359A50 50 0 0 1 100 250.007v-100a50.005 50.005 0 0 1 50-50zm-50 100H200v29.297l485.352 485.35A50 50 0 0 1 700 750.008v579.297l200-200V750.007a50 50 0 0 1 14.648-35.352L1400 229.304z", "fillRule": "evenodd"})
      ]
    );
  }
});

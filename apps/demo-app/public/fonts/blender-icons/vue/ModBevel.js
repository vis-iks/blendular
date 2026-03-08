import { defineComponent, h } from 'vue';

export const ModBevel = defineComponent({
  name: 'ModBevel',
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
        h('path', {"d": "M950.4 99.612a50 50 0 0 0-35.352 14.648l-800 800a50 50 0 0 0-14.648 35.352l-.8 500.586a50.005 50.005 0 0 0 50 50.195l1300.8-.781a50.005 50.005 0 0 0 50-50v-1300a50.005 50.005 0 0 0-50-50zm20.703 100H1400.4v1200l-1200.781.8.8-430.078z", "fillRule": "evenodd"}),
        h('path', {"d": "m650.4 99.612-500.781.8a50.005 50.005 0 0 0-50 50v500a50.005 50.005 0 1 0 100 0V200.217l450.781-.605a50.005 50.005 0 1 0 0-100", "fillRule": "evenodd"})
      ]
    );
  }
});

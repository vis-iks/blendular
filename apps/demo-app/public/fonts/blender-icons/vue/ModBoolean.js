import { defineComponent, h } from 'vue';

export const ModBoolean = defineComponent({
  name: 'ModBoolean',
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
        h('path', {"d": "M1050 299.609a50.005 50.005 0 0 0-50 50v650H350a50.005 50.005 0 0 0-50 50l-.8 400.586a50.005 50.005 0 0 0 50.195 50.195l1100.605-.781a50.005 50.005 0 0 0 50-50v-1100a50.005 50.005 0 0 0-50-50zm50 100h300v1000l-1000.781.8.6-300.781H1050a50.005 50.005 0 0 0 50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M750 99.609a50.005 50.005 0 0 1 50 50v600a50.005 50.005 0 0 1-50 50H150a50.005 50.005 0 0 1-50-50v-600a50.005 50.005 0 0 1 50-50zm-50 100H200v500h500z", "fillRule": "evenodd"})
      ]
    );
  }
});

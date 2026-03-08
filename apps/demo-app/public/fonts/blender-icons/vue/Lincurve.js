import { defineComponent, h } from 'vue';

export const Lincurve = defineComponent({
  name: 'Lincurve',
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
        h('path', {"d": "M802.582 100.997a50.005 51.137 0 0 0-41.992 20.772l-648.243 894.407a50.005 51.137 0 1 0 80.274 60.918l608.203-839.08 607.031 838.88a50.005 51.137 0 1 0 80.469-60.718L841.058 121.769a50.005 51.137 0 0 0-38.476-20.772", "fillRule": "evenodd"})
      ]
    );
  }
});

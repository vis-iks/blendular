import { defineComponent, h } from 'vue';

export const KeyEmpty3 = defineComponent({
  name: 'KeyEmpty3',
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
        h('path', {"d": "M446.904 100.002c-191.352 0-346.901 156.042-346.901 348.165v903.666c0 192.123 155.55 348.168 346.9 348.168h2505.89c191.35 0 347.185-156.045 347.185-348.168V448.167c0-192.123-155.834-348.165-347.186-348.165zm0 100.001h2505.888c137.897 0 247.19 109.711 247.19 248.164v903.666c0 138.453-109.293 248.168-247.19 248.168H446.904c-137.897 0-246.905-109.715-246.905-248.168V448.167c0-138.453 109.008-248.164 246.905-248.164", "fillRule": "evenodd"})
      ]
    );
  }
});

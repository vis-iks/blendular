import { defineComponent, h } from 'vue';

export const KeyBackspace = defineComponent({
  name: 'KeyBackspace',
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
        h('path', {"d": "M899.904 99.502 100.503 899.667l799.4 800.334h1252.905c191.35 0 347.185-156.045 347.185-348.168V448.167c0-192.123-155.834-348.165-347.185-348.165zm57.755 100.622c1689.218 0 785.18-.1 1195.149-.1 137.896 0 247.189 109.711 247.189 248.164v903.666c0 138.453-109.293 248.168-247.19 248.168l-1195.38.4L257.4 900.441z", "fillRule": "evenodd"}),
        h('path', {"d": "m1882.732 475.595 141.336 141.664-282.836 282.336 282.75 283.25-141.5 141-282.5-282.5-283 282.5-141.5-141 282.75-283.25-282.5-282.5 141.5-141.5 282.5 283z", "fillRule": "evenodd"})
      ]
    );
  }
});

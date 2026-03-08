import { defineComponent, h } from 'vue';

export const GestureRotate = defineComponent({
  name: 'GestureRotate',
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
        h('path', {"d": "M284.574 799.969c5.083 156.295 85.74 302.102 207.477 401.592l79.326-97.065c-92.477-75.579-151.874-185.885-156.893-304.39l185.675-.02-250.474-299.808-249.628 299.808z", "fillRule": "evenodd"}),
        h('path', {"d": "M1315.383 800.588c-5.084-156.295-85.74-302.101-207.477-401.592l-79.327 97.066c92.477 75.579 151.875 185.884 156.893 304.39l-185.675.02 250.475 299.808L1499.9 800.47z", "fillRule": "evenodd"})
      ]
    );
  }
});

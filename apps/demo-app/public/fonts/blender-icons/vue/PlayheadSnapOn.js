import { defineComponent, h } from 'vue';

export const PlayheadSnapOn = defineComponent({
  name: 'PlayheadSnapOn',
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
        h('path', {"d": "M113.732 1280.075a50 50 0 0 0-50 50 50 50 0 0 0 50 50H414.73v-100zm1106.057 0v100h307.59a50 50 0 0 0 50-50 50 50 0 0 0-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "m977.015 1510.687-151.155-181.24 195.286-202.48-143.12-174.409", "fillRule": "evenodd"}),
        h('path', {"d": "M819.758 389.052c-307.01 0-300.994 290.904-300.994 290.904v53.717h-250.09v-49.88c0-360.183 215.195-554.414 551.084-554.414m0 259.673c307.01 0 300.993 290.904 300.993 290.904v53.717h250.09v-49.88c0-360.183-215.195-554.414-551.083-554.414M518.764 935.53v94.244h-250.09v-94.243zm601.987 0v94.244h250.09v-94.243z", "fillRule": "evenodd"})
      ]
    );
  }
});

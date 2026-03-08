import { defineComponent, h } from 'vue';

export const CollectionNew = defineComponent({
  name: 'CollectionNew',
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
        h('path', {"d": "M600.021 900a100.01 100.01 0 1 0 0 200h200a100.01 100.01 0 1 0 0-200zm-450-600a50.005 50.005 0 0 0-50 50v300a50.005 50.005 0 0 0 50 50h50v750a50.005 50.005 0 0 0 50 50h900a50.005 50.005 0 0 0 50-50V950a50.005 50.005 0 1 0-100 0v450h-800V700h350a50.005 50.005 0 1 0 0-100h-450V400h450a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"}),
        h('path', {"d": "M1150.024 100.03c-193.3 0-350 156.7-350 350s156.7 350 350 350 350-156.7 350-350-156.7-350-350-350m-50 100h100v200h200v100h-200v200h-100v-200h-200v-100h200z", "fillRule": "evenodd"})
      ]
    );
  }
});

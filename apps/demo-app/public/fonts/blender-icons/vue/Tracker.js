import { defineComponent, h } from 'vue';

export const Tracker = defineComponent({
  name: 'Tracker',
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
        h('path', {"d": "M800 100v400H550a50.005 50.005 0 0 0-50 50v250H100v100h400v250a50.005 50.005 0 0 0 50 50h250v400h100v-400h250a50.005 50.005 0 0 0 50-50V900h400V800h-400V550a50.005 50.005 0 0 0-50-50H900V100zM600 600h500v500H600zm200 200v100h100V800z", "fillRule": "evenodd"})
      ]
    );
  }
});

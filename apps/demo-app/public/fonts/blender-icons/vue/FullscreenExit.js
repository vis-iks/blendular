import { defineComponent, h } from 'vue';

export const FullscreenExit = defineComponent({
  name: 'FullscreenExit',
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
        h('path', {"d": "M1449.126 99.506a50 50 0 0 0-34.375 15.04l-414.648 413.671v-278.32a50.005 50.005 0 1 0-100 0v400a50.005 50.005 0 0 0 50 50h400a50.005 50.005 0 1 0 0-100h-280.274l415.43-414.453a50.005 50.005 0 0 0-36.133-85.938M250.298 899.702a50.005 50.005 0 1 0 0 100h278.321l-413.868 414.844a50.005 50.005 0 1 0 70.899 70.507l414.648-415.625v280.274a50.005 50.005 0 1 0 100 0v-400a50.005 50.005 0 0 0-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M350.103 299.702a50.005 50.005 0 0 0-50 50v450.195h100V399.702h400v-100zm850.195 500.195v400H800.103v100h450.195a50.005 50.005 0 0 0 50-50v-450z", "fillRule": "evenodd"})
      ]
    );
  }
});

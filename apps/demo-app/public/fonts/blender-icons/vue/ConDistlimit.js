import { defineComponent, h } from 'vue';

export const ConDistlimit = defineComponent({
  name: 'ConDistlimit',
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
        h('path', {"d": "M1500.058 600V400h-100v200zm0-300V100h-100v200zm0 1200v-200h-100v200zm0-300v-200h-100v200zm0-300V700h-100v200z", "fillRule": "evenodd"}),
        h('path', {"d": "M850.058 299.023a50.005 50.005 0 0 0-34.766 85.743l114.649 114.648-629.297 629.297-114.648-114.649a50.005 50.005 0 1 0-70.704 70.704l300 300a50.005 50.005 0 1 0 70.704-70.704l-114.649-114.648 629.297-629.297 114.648 114.649a50.005 50.005 0 1 0 70.704-70.704l-300-300a50 50 0 0 0-35.938-15.039", "fillRule": "evenodd"})
      ]
    );
  }
});

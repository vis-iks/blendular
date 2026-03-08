import { defineComponent, h } from 'vue';

export const SnapPerpendicular = defineComponent({
  name: 'SnapPerpendicular',
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
        h('path', {"d": "M149.27 99.368a50.005 50.005 0 0 0-49.219 50.586v1290.82a50 50 0 0 0 8.203 37.695l.2.4a50 50 0 0 0 2.93 3.52l.2.4a50 50 0 0 0 3.125 3.32 50 50 0 0 0 2.539 2.15 50 50 0 0 0 1.172 1.17l.39.2a50 50 0 0 0 4.102 2.93 50 50 0 0 0 35.352 7.42H1450.06a50.005 50.005 0 1 0 0-100h-1250v-1250a50.005 50.005 0 0 0-50.79-50.611", "fillRule": "evenodd"}),
        h('path', {"d": "M449.27 800.735c-27.613.003-49.997 22.387-50 50v300c.003 27.613 22.387 49.997 50 50h300c27.613-.003 49.997-22.387 50-50v-300c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const ObjectDatamode = defineComponent({
  name: 'ObjectDatamode',
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
        h('path', {"d": "M150 100a50.005 50.005 0 0 0-50 50v350h100V200h300V100zm950 0v100h300v300h100V150a50.005 50.005 0 0 0-50-50zM100 1100v350a50.005 50.005 0 0 0 50 50h350v-100H200v-300zm1300 0v300h-300v100h350a50.005 50.005 0 0 0 50-50v-350z", "fillRule": "evenodd"}),
        h('path', {"d": "M450 400c-27.613.003-49.997 22.387-50 50v700c.003 27.613 22.387 49.997 50 50h700c27.613-.003 49.997-22.387 50-50V450c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});

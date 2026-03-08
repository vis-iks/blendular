import { defineComponent, h } from 'vue';

export const ObjectHidden = defineComponent({
  name: 'ObjectHidden',
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
        h('path', {"d": "M450 400a50.005 50.005 0 0 0-50 50v150h100V500h100V400zm250 0v100h200V400zm300 0v100h100v100h100V450a50.005 50.005 0 0 0-50-50zM400 700v200h100V700zm700 0v200h100V700zm-700 300v150a50.005 50.005 0 0 0 50 50h150v-100H500v-100zm700 0v100h-100v100h150a50.005 50.005 0 0 0 50-50v-150zm-400 100v100h200v-100z", "fillRule": "evenodd"})
      ]
    );
  }
});

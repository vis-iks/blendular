import { defineComponent, h } from 'vue';

export const Newfolder = defineComponent({
  name: 'Newfolder',
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
        h('path', {"d": "M150 300c-27.613.003-49.997 22.387-50 50v1100c.003 27.613 22.387 49.997 50 50h1200c27.613-.003 49.997-22.387 50-50V894.14c-31.959 10.801-65.516 17.574-100 21.29V1400H200V700c201.109 1.725 425.811.51 654.102 0-37.613-59.155-61.026-127.195-68.946-200H500V350c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M1250 100c-193.3 0-350 156.7-350 350s156.7 350 350 350 350-156.7 350-350-156.7-350-350-350m-50 100h100v200h200v100h-200v200h-100V500h-200V400h200z", "fillRule": "evenodd"})
      ]
    );
  }
});

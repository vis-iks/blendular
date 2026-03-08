import { defineComponent, h } from 'vue';

export const ConObjectsolver = defineComponent({
  name: 'ConObjectsolver',
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
        h('path', {"d": "M1400 400V150c-.003-27.613-22.387-49.997-50-50h-250v100h200v200zm-1300 0V150c.003-27.613 22.387-49.997 50-50h250v100H200v200zm1300 700v250c-.003 27.613-22.387 49.997-50 50h-250v-100h200v-200zm-1300 0v250c.003 27.613 22.387 49.997 50 50h250v-100H200v-200z", "fillRule": "evenodd"}),
        h('path', {"d": "M700 100v200h100V100zM450 400c-27.613.003-49.997 22.387-50 50v600c.003 27.613 22.387 49.997 50 50h600c27.613-.003 49.997-22.387 50-50V450c-.003-27.613-22.387-49.997-50-50zm50 100h502.734v500H500zM100 700v100h200V700zm1100 0v100h200V700zm-500 500v200h100v-200z", "fillRule": "evenodd"})
      ]
    );
  }
});

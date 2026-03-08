import { defineComponent, h } from 'vue';

export const FileTick = defineComponent({
  name: 'FileTick',
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
        h('path', {"d": "M150 100c-27.613.003-49.997 22.387-50 50v1300c.003 27.613 22.387 49.997 50 50h1300c27.613-.003 49.997-22.387 50-50V450.781a50 50 0 0 0-14.648-35.351l-300-300.782A50 50 0 0 0 1150 100zm50 100h200v450c.003 27.613 22.387 49.997 50 50h600c27.613-.003 49.997-22.387 50-50V200h29.297L1400 471.484V1400H200zm600 0h200v400H800z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const ModBuild = defineComponent({
  name: 'ModBuild',
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
        h('path', {"d": "M150 500c-27.613.003-49.997 22.387-50 50v900c.003 27.613 22.387 49.997 50 50h1300c27.613-.003 49.997-22.387 50-50V850c-.003-27.613-22.387-49.997-50-50H700V550c-.003-27.613-22.387-49.997-50-50zm50 100h400v200H200zm0 300h200v200H200zm300 0h400v200H500zm500 0h400v200h-400zm-800 300h400v200H200zm500 0h400v200H700zm500 0h200v200h-200z", "fillRule": "evenodd"}),
        h('path', {"d": "M1450 100a50.005 50.005 0 0 1 50 50v300a50.005 50.005 0 0 1-50 50H950a50.005 50.005 0 0 1-50-50V150a50.005 50.005 0 0 1 50-50zm-50 100h-400v200h400z", "fillRule": "evenodd"})
      ]
    );
  }
});

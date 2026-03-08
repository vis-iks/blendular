import { defineComponent, h } from 'vue';

export const Console = defineComponent({
  name: 'Console',
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
        h('path', {"d": "M150 100a50.005 50.005 0 0 0-50 50v1300a50.005 50.005 0 0 0 50 50h1300a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50zm50 100h1200v1200H200zm200 200v100h100V400zm100 100v100h100V500zm100 100v100h100V600zm0 100H500v100h100zM500 800H400v100h100zm200 0v100h300V800z", "fillRule": "evenodd"})
      ]
    );
  }
});

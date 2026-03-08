import { defineComponent, h } from 'vue';

export const UvData = defineComponent({
  name: 'UvData',
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
        h('path', {"d": "M450 100a50 50 0 0 0-35.352 14.648l-300 300A50 50 0 0 0 100 450v1000a50.005 50.005 0 0 0 50 50h1000a50 50 0 0 0 35.352-14.648l300-300A50 50 0 0 0 1500 1150V150a50.005 50.005 0 0 0-50-50zm20.703 100H1400v929.297L1129.297 1400H200V470.703zM500 500v200h200V500zm200 200v200h200V700zm200 0h200V500H900zm0 200v200h200V900zm0 200H700v200h200zm-200 0V900H500v200zm-200 0H300v200h200zm0-200V700H300v200z", "fillRule": "evenodd"})
      ]
    );
  }
});

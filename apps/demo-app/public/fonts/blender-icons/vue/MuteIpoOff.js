import { defineComponent, h } from 'vue';

export const MuteIpoOff = defineComponent({
  name: 'MuteIpoOff',
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
        h('path', {"d": "M650 100a50 50 0 0 0-35.352 14.648L329.297 400H150a50.005 50.005 0 0 0-50 50v500a50.005 50.005 0 0 0 50 50h179.297l285.351 285.352A50 50 0 0 0 650 1300h100a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50zm20.703 100H700v1000h-29.297L385.352 914.648A50 50 0 0 0 350 900H200V500h150a50 50 0 0 0 35.352-14.648z", "fillRule": "evenodd"})
      ]
    );
  }
});

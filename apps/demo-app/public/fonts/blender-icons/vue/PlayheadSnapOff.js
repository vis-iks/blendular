import { defineComponent, h } from 'vue';

export const PlayheadSnapOff = defineComponent({
  name: 'PlayheadSnapOff',
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
        h('path', {"d": "M819.758 393.472c-307.01 0-300.994 286.484-300.994 286.484v349.818h-250.09V683.792c0-360.182 215.195-558.832 551.084-558.832m0 268.512c307.01 0 300.993 286.484 300.993 286.484v349.818h250.09V683.792c0-360.182-215.195-558.832-551.083-558.832", "fillRule": "evenodd"}),
        h('path', {"d": "M113.733 1330.074H1527.38", "fillRule": "evenodd"})
      ]
    );
  }
});

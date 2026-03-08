import { defineComponent, h } from 'vue';

export const ModDecim = defineComponent({
  name: 'ModDecim',
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
        h('path', {"d": "M649.612 99.219a50 50 0 0 0-9.961 1.17l-490.04.4a50.005 50.005 0 0 0-50 50v1000a50.005 50.005 0 1 0 100 0V700h450.782a50.005 50.005 0 0 0 50-50V200.195l450-.195a50.005 50.005 0 1 0 0-100l-489.258.4a50 50 0 0 0-11.523-1.17zm-49.219 101.172V600H199.612V200.586z", "fillRule": "evenodd"}),
        h('path', {"d": "M1448.831 100a50 50 0 0 0-33.79 14.648L114.26 1415.43a50.005 50.005 0 0 0 35.352 85.351l1300.781-.781a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-51.562-50m-48.438 170.703V1400l-1130.078.8z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const FaceMaps = defineComponent({
  name: 'FaceMaps',
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
        h('path', {"d": "m454.687 99.6-300 300h941.406l300-300zm41.406 100h658.594l-100 100H396.093zm554.297 300-900.781.8a50.005 50.005 0 0 0-50 50v900a50.005 50.005 0 0 0 50 50h900a50.005 50.005 0 0 0 50-50l.781-900.8a50.005 50.005 0 0 0-50-50m-50 100-.8 800.781h-800V600.186z", "fillRule": "evenodd"}),
        h('path', {"d": "m1500.39 203.897-85.352 85.351-214.648 214.649v941.406l300-300z", "fillRule": "evenodd"})
      ]
    );
  }
});

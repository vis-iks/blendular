import { defineComponent, h } from 'vue';

export const RestrictColorOff = defineComponent({
  name: 'RestrictColorOff',
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
        h('path', {"d": "M150 100a50.005 50.005 0 0 0-50 50v850c0 109.865 90.135 200 200 200s200-90.135 200-200V150a50.005 50.005 0 0 0-50-50zm50 100h200v800c0 55.821-44.179 100-100 100s-100-44.179-100-100z", "fillRule": "evenodd"}),
        h('path', {"d": "M849.219 200a50 50 0 0 0-34.571 14.648L600 429.297v141.406l250-250L979.297 450 600 829.297v141.406l485.352-485.351a50.005 50.005 0 0 0 0-70.704l-200-200A50 50 0 0 0 849.219 200", "fillRule": "evenodd"}),
        h('path', {"d": "M925 800 825 900h275v200H625l-100 100h625c27.613-.003 49.997-22.387 50-50V850c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const ModTime = defineComponent({
  name: 'ModTime',
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
        h('path', {"d": "M800 100c-386.007 0-700 313.993-700 700s313.993 700 700 700 700-313.993 700-700-313.993-700-700-700m0 100c331.963 0 600 268.037 600 600s-268.037 600-600 600-600-268.037-600-600 268.037-600 600-600", "fillRule": "evenodd"}),
        h('path', {"d": "M849.219 299.219A50.005 50.005 0 0 0 800 350v500a50 50 0 0 0 22.266 41.602l300 200a50.005 50.005 0 1 0 55.468-83.204L900 823.242V350a50.005 50.005 0 0 0-50.781-50.781", "fillRule": "evenodd"}),
        h('path', {"d": "M350 800a50.005 50.005 0 1 0 0 100h300a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"}),
        h('path', {"d": "M474.414 424.414a50.005 50.005 0 0 0-34.766 85.938l175 175a50.005 50.005 0 1 0 70.704-70.704l-175-175a50 50 0 0 0-35.938-15.234", "fillRule": "evenodd"})
      ]
    );
  }
});

import { defineComponent, h } from 'vue';

export const ModDisplace = defineComponent({
  name: 'ModDisplace',
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
        h('path', {"d": "M150.002 100a50.005 50.005 0 0 0-50 50v800a50.005 50.005 0 0 0 50 50h50a50 50 0 0 0 28.32-8.79l1050-725a50 50 0 0 0 21.68-41.21v-75a50.005 50.005 0 0 0-50-50zm50 100h998.242L200.002 889.258V225z", "fillRule": "evenodd"}),
        h('path', {"d": "M625.002 900a50.005 50.005 0 1 0 0 100h575v15.625l-1000 380.859V1225a50.005 50.005 0 1 0-100 0v225a50.005 50.005 0 0 0 50 50h50a50 50 0 0 0 17.773-3.32l1050-400a50.005 50.005 0 0 0 32.227-46.68V950a50.005 50.005 0 0 0-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});

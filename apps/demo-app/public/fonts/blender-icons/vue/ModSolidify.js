import { defineComponent, h } from 'vue';

export const ModSolidify = defineComponent({
  name: 'ModSolidify',
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
        h('path', {"d": "M926.313 1450.381a50.005 50.005 0 0 0-50.586 49.219l-726.172.8a50.005 50.005 0 0 0-50.195-50.195l1.37-725.586a50.005 50.005 0 1 0 100 0l-1.37 675.781 676.172-.8a50.005 50.005 0 0 0 50.781 50.781", "fillRule": "evenodd"}),
        h('path', {"d": "m504.938 99.6-400 400h995.117l.6 995.703 385.352-385.351 14.634-14.649-.586-995.703zm41.406 100h797.07l-200 200h-797.07zm853.711 56.641.6 797.656-200 200-.6-797.656z", "fillRule": "evenodd"})
      ]
    );
  }
});

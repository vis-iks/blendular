import { defineComponent, h } from 'vue';

export const ModCurves = defineComponent({
  name: 'ModCurves',
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
        h('path', {"d": "M447.5 599a.5.5 0 0 0-.5.5v13.004c0 .276.224.489.5.5h13q.035 0 .066-.003c.32-.03.466-.307.438-.561V599.5a.5.5 0 0 0-.5-.5zm.5 1h12.004v12.004H448z", "fillRule": "evenodd"}),
        h('path', {"d": "M450.004 610.004s2.991 1.008 6-2c3-3 2-6 2-6", "fillRule": "evenodd"}),
        h('path', {"d": "M454.301 605.035a.5.5 0 0 0-.348.158l-.686.736a.5.5 0 0 0 .731.682l.686-.736a.5.5 0 0 0-.383-.84m2.05-2.19a.5.5 0 0 0-.347.159l-.686.735a.5.5 0 0 0 .73.682l.687-.735a.5.5 0 0 0-.383-.841m-4.095 4.384a.5.5 0 0 0-.349.159l-.685.736a.5.5 0 0 0 .73.682l.687-.736a.5.5 0 0 0-.383-.84", "fillRule": "evenodd"})
      ]
    );
  }
});

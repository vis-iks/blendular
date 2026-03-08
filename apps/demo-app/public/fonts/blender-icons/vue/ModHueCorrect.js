import { defineComponent, h } from 'vue';

export const ModHueCorrect = defineComponent({
  name: 'ModHueCorrect',
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
        h('path', {"d": "M458.004 602.004c-4.87 0-4.09 7-8 7h-1v1h1c4.75 0 4.076-7 8-7h1v-1z", "fillRule": "evenodd"}),
        h('path', {"d": "M450.504 600.998c-.253 0-.505.17-.5.508v.498h-.5c-.677-.01-.677 1.01 0 1h.5v3.502a.5.5 0 1 0 1 0v-3.502h2.48c.677.01.677-1.01 0-1h-2.48v-.498c.005-.339-.248-.508-.5-.508m6.992 4.006a.5.5 0 0 0-.492.507v3.495h-2.5c-.677-.01-.677 1.01 0 1h2.5v.498c-.01.676 1.01.676 1 0v-.498h.5c.676.01.676-1.01 0-1h-.5v-3.495a.5.5 0 0 0-.508-.507", "fillRule": "evenodd"})
      ]
    );
  }
});

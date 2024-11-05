import { h } from 'vue';
import TikTokSvg from '@/lib/TikTok.vue';

const customSvgNameToComponent = {
 'tiktok': TikTokSvg,
};

const customSvgs = {
  component: (props) => h(customSvgNameToComponent[props.icon]),
};

export { customSvgs };

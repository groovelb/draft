import { HeroSection } from './HeroSection';
import brandData from '../../../docs/brand-draft.json';

export default {
  title: 'Draft Component/Section/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## HeroSection

DraftLanding의 첫 번째 섹션.
전체 화면에 브랜드 로고(Doto)를 표시하고, 하단에 히어로 메시지가 스크롤 마퀴로 흐른다.

### 구성
- FullPageContainer (100svh)
- StretchedHeadline — "DRAFT." 로고
- MarqueeContainer — 스크롤 연동 마퀴
        `,
      },
    },
  },
  argTypes: {
    heroMessage: {
      control: 'text',
      description: '히어로 메시지 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    widePx: {
      control: 'object',
      description: '반응형 px 값 { xs, sm, md, lg }',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{ xs: 3, sm: 6, md: 12, lg: 20 }' },
      },
    },
  },
};

export const Default = {
  args: {
    heroMessage: brandData.message.hero,
    widePx: { xs: 3, sm: 6, md: 12, lg: 20 },
  },
};

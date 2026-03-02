import { CtaSection } from './CtaSection';
import brandData from '../../../docs/brand-draft.json';

export default {
  title: 'Draft Component/Section/CtaSection',
  component: CtaSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## CtaSection

DraftLanding의 마지막 CTA/Footer 섹션.
마감 메시지와 행동 유도 버튼을 전체 화면(100svh, #111111)으로 표시한다.
FooterShifting 내부에서 Sticky Footer Reveal 패턴으로 사용.

### 구성
- FullPageContainer (bgcolor: #111111)
- Typography overline — "DRAFT."
- Typography h1 — 헤드라인
- Button outlined — CTA
- Divider + caption — 푸터
        `,
      },
    },
  },
  argTypes: {
    closingMessage: {
      control: 'text',
      description: '클로징 메시지',
      table: { type: { summary: 'string' } },
    },
    ctaText: {
      control: 'text',
      description: 'CTA 버튼 텍스트',
      table: { type: { summary: 'string' } },
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
    closingMessage: brandData.message.closing,
    ctaText: brandData.message.cta,
    widePx: { xs: 3, sm: 6, md: 12, lg: 20 },
  },
};

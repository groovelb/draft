import { BrandStorySection } from './BrandStorySection';
import brandData from '../../../docs/brand-draft.json';

export default {
  title: 'Draft Component/Section/BrandStorySection',
  component: BrandStorySection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## BrandStorySection

DraftLanding의 브랜드 스토리 섹션.
황금비 분할(PhiSplit) 레이아웃으로 본문/클로징 메시지와 일러스트를 배치한다.

### 구성
- LineGrid (full-bleed)
- PhiSplit × 2 — 본문 + 클로징(reversed)
- BlueprintReveal — SVG 일러스트 애니메이션
        `,
      },
    },
  },
  argTypes: {
    bodyMessage: {
      control: 'text',
      description: '브랜드 스토리 본문',
      table: { type: { summary: 'string' } },
    },
    closingMessage: {
      control: 'text',
      description: '클로징 메시지',
      table: { type: { summary: 'string' } },
    },
    gridGap: {
      control: { type: 'number', min: 0, max: 8 },
      description: 'LineGrid gap (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
  },
};

export const Default = {
  args: {
    bodyMessage: brandData.message.body,
    closingMessage: brandData.message.closing,
    gridGap: 0,
  },
};

import { CoreValuesSection } from './CoreValuesSection';
import brandData from '../../../docs/brand-draft.json';

export default {
  title: 'Draft Component/Section/CoreValuesSection',
  component: CoreValuesSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## CoreValuesSection

DraftLanding의 Core Values 섹션.
4개의 핵심 가치를 2×2 full-bleed 격자로 표시한다.

### 구성
- LineGrid (outer + 2×2 grid)
- Title — "Principles Drawn on the Blueprint"
- CoreValueCard × 4 — 넘버링, 타이틀, 일러스트, 설명
        `,
      },
    },
  },
  argTypes: {
    coreValues: {
      control: 'object',
      description: 'Core Value 데이터 배열 [{ key, label, description }]',
      table: { type: { summary: 'Array' } },
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
    coreValues: brandData.coreValues,
    gridGap: 0,
  },
};

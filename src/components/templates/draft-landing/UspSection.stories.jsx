import { UspSection } from './UspSection';
import brandData from '../../../docs/brand-draft.json';

export default {
  title: 'Draft Component/Section/UspSection',
  component: UspSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## UspSection

DraftLanding의 USP 섹션.
4개의 USP를 4×1 full-bleed 격자로 표시한다.
각 카드에 Blueprint 일러스트가 포함된다.

### 구성
- LineGrid (outer + 4-col grid)
- Title — "Analog for the Digital Age"
- UspCard × 4 — 일러스트 + 라벨 + 설명
        `,
      },
    },
  },
  argTypes: {
    usp: {
      control: 'object',
      description: 'USP 데이터 배열 [{ key, label, description }]',
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
    usp: brandData.usp,
    gridGap: 0,
  },
};

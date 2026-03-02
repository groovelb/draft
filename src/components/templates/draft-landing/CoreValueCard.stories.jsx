import { Box } from '@mui/material';
import { CoreValueCard } from './CoreValueCard';
import brandData from '../../../docs/brand-draft.json';
import ValuePrecision from '../../../assets/illustrations/value-precision.svg?react';

export default {
  title: 'Draft Component/Card/CoreValueCard',
  component: CoreValueCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## CoreValueCard

개별 Core Value를 넘버링, 영어 타이틀, 일러스트, 한글 라벨, 설명으로 구성.
각 영역이 LineGrid 수평선으로 구분되며 BlueprintReveal 조립 트랜지션 적용.

### 시각적 구조
\`\`\`
┌─────────────────┐
│ 01  PRECISION   │  넘버링 + 영어 타이틀
├─────────────────┤
│   [일러스트]     │  BlueprintReveal
├─────────────────┤
│ 정밀함           │
│ 설명 텍스트       │  한글 라벨 + 설명
└─────────────────┘
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    Illustration: {
      control: false,
      description: 'SVG 일러스트 컴포넌트',
      table: { type: { summary: 'React.ComponentType' } },
    },
    index: {
      control: { type: 'number', min: 0, max: 3 },
      description: '0부터 시작하는 인덱스 (넘버링용)',
      table: { type: { summary: 'number' } },
    },
    title: {
      control: 'text',
      description: '영어 타이틀 키 (e.g. "precision")',
      table: { type: { summary: 'string' } },
    },
    label: {
      control: 'text',
      description: '가치 라벨 (한글)',
      table: { type: { summary: 'string' } },
    },
    description: {
      control: 'text',
      description: '가치 설명',
      table: { type: { summary: 'string' } },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={ { maxWidth: 480 } }>
        <Story />
      </Box>
    ),
  ],
};

export const Default = {
  args: {
    Illustration: ValuePrecision,
    index: 0,
    title: brandData.coreValues[0].key,
    label: brandData.coreValues[0].label,
    description: brandData.coreValues[0].description,
  },
};

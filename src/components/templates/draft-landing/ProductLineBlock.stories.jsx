import { Box } from '@mui/material';
import { ProductLineBlock } from './ProductLineBlock';
import brandData from '../../../docs/brand-draft.json';
import { productIllustrationMap } from '../../../assets/illustrations';

export default {
  title: 'Draft Component/Card/ProductLineBlock',
  component: ProductLineBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## ProductLineBlock

하나의 제품 라인(GRID, INK, FOLIO)을 라인 헤더와 3열 full-bleed 격자로 표시.
흰 텍스트/SVG invert — 어두운 배경 위에서 사용.

### 구성
- LineGrid (borderColor: common.white)
- Typography h3 — 라인명
- ProductCard × 3 — BlueprintReveal 일러스트
        `,
      },
    },
  },
  argTypes: {
    lineName: {
      control: 'text',
      description: '라인명 (e.g. "GRID")',
      table: { type: { summary: 'string' } },
    },
    concept: {
      control: 'text',
      description: '라인 컨셉 설명',
      table: { type: { summary: 'string' } },
    },
    items: {
      control: 'object',
      description: '제품 배열 [{ name, description }]',
      table: { type: { summary: 'Array' } },
    },
    illustrationMap: {
      control: false,
      description: '제품명→SVG 매핑 객체',
      table: { type: { summary: 'object' } },
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
  decorators: [
    (Story) => (
      <Box sx={ {
        bgcolor: '#003DA5',
        color: 'common.white',
        '& svg': { filter: 'brightness(0) invert(1)' },
        minHeight: '100vh',
      } }>
        <Story />
      </Box>
    ),
  ],
};

export const Default = {
  args: {
    lineName: brandData.products[0].line,
    concept: brandData.products[0].concept,
    items: brandData.products[0].items,
    illustrationMap: productIllustrationMap,
    gridGap: 0,
  },
};

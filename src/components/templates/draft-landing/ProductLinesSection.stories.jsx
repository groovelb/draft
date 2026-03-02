import { Box } from '@mui/material';
import { ProductLinesSection } from './ProductLinesSection';
import brandData from '../../../docs/brand-draft.json';

export default {
  title: 'Draft Component/Section/ProductLinesSection',
  component: ProductLinesSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## ProductLinesSection

DraftLanding의 Product Lines 섹션.
3개 라인(GRID, INK, FOLIO)을 full-bleed 격자로 표시한다.
흰 텍스트/SVG invert — 어두운 배경 위에서 사용.

### 구성
- LineGrid (borderColor: common.white)
- Title — "Three Lines of Tools"
- ProductLineBlock × 3 → ProductCard × 9
- BlueprintReveal — SVG 일러스트 애니메이션
        `,
      },
    },
  },
  argTypes: {
    products: {
      control: 'object',
      description: '제품 라인 데이터 배열 [{ line, concept, items[] }]',
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
  decorators: [
    (Story) => (
      <Box sx={ { bgcolor: '#003DA5', minHeight: '100vh' } }>
        <Story />
      </Box>
    ),
  ],
};

export const Default = {
  args: {
    products: brandData.products,
    gridGap: 0,
  },
};

import { Box } from '@mui/material';
import { ProductCard } from './ProductCard';
import brandData from '../../../docs/brand-draft.json';
import GridNotebookA5 from '../../../assets/illustrations/grid-notebook-a5.svg?react';

export default {
  title: 'Draft Component/Card/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ProductCard

개별 제품을 일러스트, 이름, 설명과 함께 표시.
뷰포트 진입 시 BlueprintReveal 조립 트랜지션으로 일러스트 등장.
흰 텍스트 — 어두운 배경 위에서 사용.
        `,
      },
    },
  },
  argTypes: {
    Illustration: {
      control: false,
      description: '제품 일러스트 SVG 컴포넌트',
      table: { type: { summary: 'React.ComponentType' } },
    },
    name: {
      control: 'text',
      description: '제품명',
      table: { type: { summary: 'string' } },
    },
    description: {
      control: 'text',
      description: '제품 설명',
      table: { type: { summary: 'string' } },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={ {
        bgcolor: '#003DA5',
        p: 4,
        maxWidth: 320,
        '& svg': { filter: 'brightness(0) invert(1)' },
      } }>
        <Story />
      </Box>
    ),
  ],
};

export const Default = {
  args: {
    Illustration: GridNotebookA5,
    name: brandData.products[0].items[0].name,
    description: brandData.products[0].items[0].description,
  },
};

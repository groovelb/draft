import { Box } from '@mui/material';
import { UspCard } from './UspCard';
import brandData from '../../../docs/brand-draft.json';
import { UspGridSystem } from '../../../assets/illustrations';

export default {
  title: 'Draft Component/Card/UspCard',
  component: UspCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## UspCard

개별 USP(Unique Selling Point)를 일러스트, 라벨, 설명과 함께 표시하는 카드.
BlueprintGrid 배경 위에 BlueprintReveal 조립 트랜지션으로 일러스트가 등장한다.
        `,
      },
    },
  },
  argTypes: {
    Illustration: {
      control: false,
      description: 'USP 일러스트 SVG 컴포넌트',
      table: { type: { summary: 'React.ComponentType' } },
    },
    label: {
      control: 'text',
      description: 'USP 라벨',
      table: { type: { summary: 'string' } },
    },
    description: {
      control: 'text',
      description: 'USP 설명',
      table: { type: { summary: 'string' } },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={ { maxWidth: 320, textAlign: 'center' } }>
        <Story />
      </Box>
    ),
  ],
};

export const Default = {
  args: {
    Illustration: UspGridSystem,
    label: brandData.usp[0].label,
    description: brandData.usp[0].description,
  },
};

import { Box, Typography } from '@mui/material';
import BlueprintGrid from './BlueprintGrid';

export default {
  title: 'Component/8. Layout/BlueprintGrid',
  component: BlueprintGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## BlueprintGrid

5mm 모눈종이 스타일의 반복 그리드 패턴을 배경으로 표시하는 래퍼 컴포넌트.
일러스트 뒤에 배치하여 "도면 위의 스케치" 느낌을 준다.

### 사용처
- CoreValueCard — 일러스트 배경
- ProductCard — 일러스트 배경 (흰색 그리드)
- BrandStorySection — BrandHero 일러스트 배경
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 8, max: 48, step: 2 },
      description: '그리드 셀 크기 (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 20 },
      },
    },
    color: {
      control: 'color',
      description: '그리드 선 색상',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#003DA5' },
      },
    },
    opacity: {
      control: { type: 'range', min: 0.02, max: 0.5, step: 0.02 },
      description: '그리드 선 투명도',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0.12 },
      },
    },
    strokeWidth: {
      control: { type: 'range', min: 0.25, max: 2, step: 0.25 },
      description: '선 두께',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0.5 },
      },
    },
  },
};

export const Default = {
  args: {
    size: 20,
    color: '#003DA5',
    opacity: 0.12,
    strokeWidth: 0.5,
  },
  render: (args) => (
    <BlueprintGrid { ...args } sx={ { p: 6, width: 400, height: 400 } }>
      <Box sx={ { textAlign: 'center' } }>
        <Typography variant="h4" sx={ { color: 'primary.main', fontFamily: '"Doto", monospace' } }>
          DRAFT.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={ { mt: 1 } }>
          Blueprint Grid Background
        </Typography>
      </Box>
    </BlueprintGrid>
  ),
};

export const DarkBackground = {
  name: 'Dark Background',
  render: () => (
    <Box sx={ { bgcolor: '#003DA5', p: 4 } }>
      <BlueprintGrid color="#ffffff" opacity={ 0.08 } sx={ { p: 6, width: 400, height: 400 } }>
        <Box sx={ { textAlign: 'center' } }>
          <Typography variant="h4" sx={ { color: 'common.white', fontFamily: '"Doto", monospace' } }>
            DRAFT.
          </Typography>
          <Typography variant="body2" sx={ { color: 'rgba(255,255,255,0.7)', mt: 1 } }>
            White Grid on Dark
          </Typography>
        </Box>
      </BlueprintGrid>
    </Box>
  ),
};

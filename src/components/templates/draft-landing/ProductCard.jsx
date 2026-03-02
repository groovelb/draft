import { Box, Typography } from '@mui/material';
import BlueprintGrid from '../../layout/BlueprintGrid';
import BlueprintReveal from '../../motion/BlueprintReveal';

/**
 * ProductCard 컴포넌트
 *
 * 개별 제품을 일러스트, 이름, 설명과 함께 표시한다.
 * 뷰포트 진입 시 일러스트가 레이어별 조립 트랜지션으로 등장한다.
 *
 * Props:
 * @param {React.ComponentType} Illustration - 제품 일러스트 SVG 컴포넌트 [Required]
 * @param {string} name - 제품명 [Required]
 * @param {string} description - 제품 설명 [Required]
 *
 * Example usage:
 * <ProductCard Illustration={ GridNotebookA5 } name="Grid Notebook A5" description="..." />
 */
export function ProductCard({ Illustration, name, description }) {
  return (
    <Box>
      <BlueprintGrid color="#ffffff" opacity={ 0.08 }>
        <BlueprintReveal stagger={ 120 } duration={ 600 } converge={ 0.35 }>
          <Illustration
            style={ { width: '100%', height: 'auto', display: 'block' } }
            aria-label={ name }
          />
        </BlueprintReveal>
      </BlueprintGrid>

      <Box sx={ { mt: 3, px: { xs: 0, md: 1 } } }>
        <Typography variant="h5" sx={ { color: 'common.white' } }>
          { name }
        </Typography>
        <Typography
          variant="body1"
          sx={ {
            color: 'rgba(255,255,255,0.7)',
            mt: 1,
            wordBreak: 'keep-all',
          } }
        >
          { description }
        </Typography>
      </Box>
    </Box>
  );
}

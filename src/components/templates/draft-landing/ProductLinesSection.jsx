import { Box } from '@mui/material';
import LineGrid from '../../layout/LineGrid';
import { Title } from '../../typography/Title';
import { ProductLineBlock } from './ProductLineBlock';
import { productIllustrationMap } from '../../../assets/illustrations';

/**
 * ProductLinesSection 컴포넌트
 *
 * DraftLanding의 Product Lines 섹션.
 * 3개 라인(GRID, INK, FOLIO)을 full-bleed 격자로 표시한다.
 * 타이틀 ↔ 각 라인 사이 full-bleed 수평선 구분.
 *
 * Props:
 * @param {Array} products - 제품 라인 데이터 배열 [Required]
 * @param {number} gridGap - LineGrid gap (px) [Required]
 *
 * Example usage:
 * <ProductLinesSection products={ data.products } gridGap={ 0 } />
 */
export function ProductLinesSection({ products, gridGap }) {
  return (
    <LineGrid
      gap={ gridGap }
      borderColor="common.white"
      sx={ {
        color: 'common.white',
        '& svg': { filter: 'brightness(0) invert(1)' },
      } }
    >
      <Box sx={ { p: { xs: 4, sm: 5, md: 8, lg: 10 } } }>
        <Title
          title="Three Lines of Tools"
          level="h1"
        />
      </Box>

      { products.map((line) => (
        <ProductLineBlock
          key={ line.line }
          lineName={ line.line }
          concept={ line.concept }
          items={ line.items }
          illustrationMap={ productIllustrationMap }
          gridGap={ gridGap }
        />
      )) }
    </LineGrid>
  );
}

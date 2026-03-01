import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import LineGrid from '../../layout/LineGrid';
import { ProductCard } from './ProductCard';

/**
 * ProductLineBlock 컴포넌트
 *
 * 하나의 제품 라인(GRID, INK, FOLIO)을
 * 라인 헤더와 3열 full-bleed 격자로 표시한다.
 * 헤더 ↔ 제품 그리드 사이 full-bleed 수평선 구분.
 *
 * Props:
 * @param {string} lineName - 라인명 [Required]
 * @param {string} concept - 라인 컨셉 설명 [Required]
 * @param {Array} items - 제품 배열 [Required]
 * @param {object} illustrationMap - 제품명→SVG 매핑 [Required]
 * @param {number} gridGap - LineGrid gap (px) [Required]
 *
 * Example usage:
 * <ProductLineBlock lineName="GRID" concept="..." items={ items } illustrationMap={ map } gridGap={ 0 } />
 */
export function ProductLineBlock({ lineName, concept, items, illustrationMap, gridGap }) {
  return (
    <LineGrid gap={ gridGap } borderColor="text.primary">
      <Box sx={ { p: { xs: 4, sm: 5, md: 8, lg: 10 } } }>
        <Typography
          variant="h3"
          sx={ { color: 'primary.main' } }
        >
          { lineName }
        </Typography>
        <Typography
          variant="body1"
          sx={ { color: 'text.primary', mt: 1.5 } }
        >
          { concept }
        </Typography>
      </Box>

      <LineGrid container gap={ gridGap } borderColor="text.primary">
        { items.map((item) => (
          <Grid size={ { xs: 12, sm: 4 } } key={ item.name }>
            <Box sx={ { p: { xs: 4, sm: 5, md: 8, lg: 10 }, textAlign: 'center' } }>
              <ProductCard
                illustrationSrc={ illustrationMap[item.name] }
                name={ item.name }
                description={ item.description }
              />
            </Box>
          </Grid>
        )) }
      </LineGrid>
    </LineGrid>
  );
}

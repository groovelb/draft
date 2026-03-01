import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import LineGrid from '../../layout/LineGrid';
import { Title } from '../../typography/Title';
import { UspCard } from './UspCard';

/**
 * UspSection 컴포넌트
 *
 * DraftLanding의 USP 섹션.
 * 4개의 USP를 4x1 full-bleed 격자로 표시한다.
 * 타이틀 ↔ 카드 그리드 사이 full-bleed 수평선 구분.
 *
 * Props:
 * @param {Array} usp - USP 데이터 배열 [Required]
 * @param {number} gridGap - LineGrid gap (px) [Required]
 *
 * Example usage:
 * <UspSection usp={ data.usp } gridGap={ 0 } />
 */
export function UspSection({ usp, gridGap }) {
  return (
    <LineGrid gap={ gridGap } borderColor="text.primary">
      <Box sx={ { p: { xs: 4, sm: 5, md: 8, lg: 10 } } }>
        <Title
          title="Analog for the Digital Age"
          level="h1"
        />
      </Box>

      <LineGrid container gap={ gridGap } borderColor="text.primary">
        { usp.map((item) => (
          <Grid size={ { xs: 12, sm: 6, md: 3 } } key={ item.key }>
            <Box sx={ { p: { xs: 4, sm: 5, md: 8, lg: 10 }, textAlign: 'center' } }>
              <UspCard
                label={ item.label }
                description={ item.description }
              />
            </Box>
          </Grid>
        )) }
      </LineGrid>
    </LineGrid>
  );
}

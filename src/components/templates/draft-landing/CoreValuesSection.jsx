import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import LineGrid from '../../layout/LineGrid';
import { Title } from '../../typography/Title';
import { CoreValueCard } from './CoreValueCard';
import { coreValueIllustrationMap } from '../../../assets/illustrations';

/**
 * CoreValuesSection 컴포넌트
 *
 * DraftLanding의 Core Values 섹션.
 * 4개의 핵심 가치를 2x2 full-bleed 격자로 표시한다.
 * 타이틀 ↔ 카드 그리드 사이 full-bleed 수평선 구분.
 *
 * Props:
 * @param {Array} coreValues - Core Value 데이터 배열 [Required]
 * @param {number} gridGap - LineGrid gap (px) [Required]
 *
 * Example usage:
 * <CoreValuesSection coreValues={ data.coreValues } gridGap={ 0 } />
 */
export function CoreValuesSection({ coreValues, gridGap }) {
  return (
    <LineGrid
      gap={ gridGap }
      borderColor="text.primary"
      sx={ { '& > hr': { borderBottomWidth: 2 } } }
    >
      <Box sx={ { p: { xs: 4, sm: 5, md: 8, lg: 10 } } }>
        <Title
          title={ "Principles\nDrawn on\nthe Blueprint" }
          level="h1"
        />
      </Box>

      <LineGrid
        container
        gap={ gridGap }
        borderColor="text.primary"
        sx={ {
          '& > .MuiGrid-root::before': { width: '2px !important' },
          '& > .MuiGrid-root::after': { height: '2px !important' },
        } }
      >
        { coreValues.map((value, index) => (
          <Grid size={ 6 } key={ value.key }>
            <CoreValueCard
              Illustration={ coreValueIllustrationMap[value.key] }
              index={ index }
              title={ value.key }
              label={ value.label }
              description={ value.description }
            />
          </Grid>
        )) }
      </LineGrid>
    </LineGrid>
  );
}

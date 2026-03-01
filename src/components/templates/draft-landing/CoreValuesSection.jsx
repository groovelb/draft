import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import LineGrid from '../../layout/LineGrid';
import { Title } from '../../typography/Title';
import { CoreValueCard } from './CoreValueCard';

import ValuePrecision from '../../../assets/illustrations/value-precision.svg';
import ValueOrigin from '../../../assets/illustrations/value-origin.svg';
import ValueRestraint from '../../../assets/illustrations/value-restraint.svg';
import ValueCraft from '../../../assets/illustrations/value-craft.svg';

/** Core Value key → 일러스트 SVG 매핑 */
const valueIllustrationMap = {
  'precision': ValuePrecision,
  'origin': ValueOrigin,
  'restraint': ValueRestraint,
  'craft': ValueCraft,
};

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
    <LineGrid gap={ gridGap } borderColor="text.primary">
      <Box sx={ { p: { xs: 4, sm: 5, md: 8, lg: 10 } } }>
        <Title
          title="Principles Drawn on the Blueprint"
          level="h2"
        />
      </Box>

      <LineGrid container gap={ gridGap } borderColor="text.primary">
        { coreValues.map((value, index) => (
          <Grid size={ { xs: 12, sm: 6 } } key={ value.key }>
            <Box sx={ { p: { xs: 4, sm: 5, md: 8, lg: 10 }, textAlign: 'center' } }>
              <CoreValueCard
                illustrationSrc={ valueIllustrationMap[value.key] }
                index={ index }
                label={ value.label }
                description={ value.description }
              />
            </Box>
          </Grid>
        )) }
      </LineGrid>
    </LineGrid>
  );
}

import Grid from '@mui/material/Grid';
import { PageContainer } from '../../layout/PageContainer';
import { SectionContainer } from '../../container/SectionContainer';
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
 * 4개의 핵심 가치를 2x2 LineGrid로 표시한다.
 *
 * Props:
 * @param {Array} coreValues - Core Value 데이터 배열 [Required]
 * @param {number} gridGap - LineGrid gap (px) [Required]
 * @param {object} widePx - 반응형 px 값 [Required]
 *
 * Example usage:
 * <CoreValuesSection coreValues={ data.coreValues } gridGap={ 64 } widePx={ widePx } />
 */
export function CoreValuesSection({ coreValues, gridGap, widePx }) {
  return (
    <SectionContainer sx={ { py: { xs: 10, md: 16 } } }>
      <PageContainer sx={ { px: widePx } }>
        <Title
          title="Principles Drawn on the Blueprint"
          level="h2"
          sx={ { mb: { xs: 6, md: 10 } } }
        />

        <LineGrid container gap={ gridGap } borderColor="primary.main">
          { coreValues.map((value, index) => (
            <Grid size={ { xs: 12, sm: 6 } } key={ value.key }>
              <CoreValueCard
                illustrationSrc={ valueIllustrationMap[value.key] }
                index={ index }
                label={ value.label }
                description={ value.description }
              />
            </Grid>
          )) }
        </LineGrid>
      </PageContainer>
    </SectionContainer>
  );
}

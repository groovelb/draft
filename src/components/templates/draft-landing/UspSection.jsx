import Grid from '@mui/material/Grid';
import { PageContainer } from '../../layout/PageContainer';
import { SectionContainer } from '../../container/SectionContainer';
import LineGrid from '../../layout/LineGrid';
import { Title } from '../../typography/Title';
import { UspCard } from './UspCard';

/**
 * UspSection 컴포넌트
 *
 * DraftLanding의 USP(Why DRAFT.) 섹션.
 * 4개의 USP를 2x2 LineGrid로 표시한다.
 *
 * Props:
 * @param {Array} usp - USP 데이터 배열 [Required]
 * @param {number} gridGap - LineGrid gap (px) [Required]
 * @param {object} widePx - 반응형 px 값 [Required]
 *
 * Example usage:
 * <UspSection usp={ data.usp } gridGap={ 64 } widePx={ widePx } />
 */
export function UspSection({ usp, gridGap, widePx }) {
  return (
    <SectionContainer sx={ { py: { xs: 10, md: 16 } } }>
      <PageContainer sx={ { px: widePx } }>
        <Title
          title="Analog for the Digital Age"
          level="h2"
          sx={ { mb: { xs: 6, md: 10 } } }
        />

        <LineGrid container gap={ gridGap } borderColor="primary.main">
          { usp.map((item) => (
            <Grid size={ { xs: 12, sm: 6, md: 3 } } key={ item.key }>
              <UspCard
                label={ item.label }
                description={ item.description }
              />
            </Grid>
          )) }
        </LineGrid>
      </PageContainer>
    </SectionContainer>
  );
}

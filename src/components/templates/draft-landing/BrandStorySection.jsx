import { Box, Typography } from '@mui/material';
import { PageContainer } from '../../layout/PageContainer';
import { SectionContainer } from '../../container/SectionContainer';
import LineGrid from '../../layout/LineGrid';
import { PhiSplit } from '../../layout/PhiSplit';
import { Title } from '../../typography/Title';
import BrandHero from '../../../assets/illustrations/brand-hero.svg';

/**
 * BrandStorySection 컴포넌트
 *
 * DraftLanding의 브랜드 스토리 섹션.
 * 황금비 분할 레이아웃으로 텍스트와 일러스트를 배치한다.
 *
 * Props:
 * @param {string} bodyMessage - 브랜드 스토리 본문 [Required]
 * @param {string} closingMessage - 클로징 메시지 [Required]
 * @param {number} gridGap - LineGrid gap (px) [Required]
 * @param {object} widePx - 반응형 px 값 [Required]
 *
 * Example usage:
 * <BrandStorySection bodyMessage="..." closingMessage="..." gridGap={ 64 } widePx={ widePx } />
 */
export function BrandStorySection({ bodyMessage, closingMessage, gridGap, widePx }) {
  return (
    <SectionContainer sx={ { py: { xs: 10, md: 16 } } }>
      <PageContainer sx={ { px: widePx } }>
        <LineGrid gap={ gridGap } borderColor="primary.main">
          <PhiSplit
            primary={
              <Title
                title="The Blueprint of Ideas"
                level="h2"
              />
            }
            secondary={
              <Typography
                variant="body1"
                sx={ {
                  color: 'text.primary',
                  lineHeight: 2,
                  wordBreak: 'keep-all',
                } }
              >
                { bodyMessage }
              </Typography>
            }
            gap={ 6 }
            stackAt="md"
          />

          <PhiSplit
            isReversed
            primary={
              <Box
                component="img"
                src={ BrandHero }
                alt="The Blueprint Desk"
                sx={ { width: '100%', height: 'auto', display: 'block' } }
              />
            }
            secondary={
              <Typography
                variant="body1"
                sx={ {
                  color: 'text.primary',
                  lineHeight: 2,
                  wordBreak: 'keep-all',
                } }
              >
                { closingMessage }
              </Typography>
            }
            gap={ 6 }
            stackAt="md"
          />
        </LineGrid>
      </PageContainer>
    </SectionContainer>
  );
}

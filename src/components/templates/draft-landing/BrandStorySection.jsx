import { Box, Typography } from '@mui/material';
import LineGrid from '../../layout/LineGrid';
import BlueprintGrid from '../../layout/BlueprintGrid';
import { PhiSplit } from '../../layout/PhiSplit';
import { Title } from '../../typography/Title';
import BlueprintReveal from '../../motion/BlueprintReveal';
import { BrandHero } from '../../../assets/illustrations';

/**
 * BrandStorySection 컴포넌트
 *
 * DraftLanding의 브랜드 스토리 섹션.
 * 황금비 분할 레이아웃, full-bleed LineGrid로 콘텐츠 블록 구분.
 * PageContainer 없이 라인이 화면 전체를 채운다.
 *
 * Props:
 * @param {string} bodyMessage - 브랜드 스토리 본문 [Required]
 * @param {string} closingMessage - 클로징 메시지 [Required]
 * @param {number} gridGap - LineGrid gap (px) [Required]
 *
 * Example usage:
 * <BrandStorySection bodyMessage="..." closingMessage="..." gridGap={ 0 } />
 */
export function BrandStorySection({ bodyMessage, closingMessage, gridGap }) {
  return (
    <LineGrid gap={ gridGap } borderColor="text.primary">
      <Box sx={ { p: { xs: 4, sm: 5, md: 8, lg: 10 } } }>
        <PhiSplit
          primary={
            <Title
              title="The Blueprint of Ideas"
              level="h1"
            />
          }
          secondary={
            <Typography
              variant="body1"
              sx={ {
                color: 'text.primary',
                lineHeight: 2,
                wordBreak: 'keep-all',
                '&::first-letter': {
                  float: 'left',
                  fontSize: '3.2em',
                  lineHeight: 1,
                  fontWeight: 'bold',
                  mr: 0.5,
                  mt: '0.05em',
                },
              } }
            >
              { bodyMessage }
            </Typography>
          }
          gap={ 6 }
          stackAt="md"
        />
      </Box>

      <Box sx={ { p: { xs: 4, sm: 5, md: 8, lg: 10 } } }>
        <PhiSplit
          isReversed
          primary={
            <BlueprintGrid>
              <BlueprintReveal stagger={ 200 } duration={ 800 } converge={ 0.3 }>
                <BrandHero
                  style={ { width: '100%', height: 'auto', display: 'block' } }
                  aria-label="The Blueprint Desk"
                />
              </BlueprintReveal>
            </BlueprintGrid>
          }
          secondary={
            <Typography
              variant="body1"
              sx={ {
                color: 'text.primary',
                lineHeight: 2,
                wordBreak: 'keep-all',
                '&::first-letter': {
                  float: 'left',
                  fontSize: '3.2em',
                  lineHeight: 1,
                  fontWeight: 'bold',
                  mr: 0.5,
                  mt: '0.05em',
                },
              } }
            >
              { closingMessage }
            </Typography>
          }
          gap={ 6 }
          stackAt="md"
        />
      </Box>
    </LineGrid>
  );
}

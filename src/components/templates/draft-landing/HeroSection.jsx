import { Box, Typography } from '@mui/material';
import { FullPageContainer } from '../../layout/FullPageContainer';
import { PageContainer } from '../../layout/PageContainer';
import { StretchedHeadline } from '../../typography/StretchedHeadline';
import MarqueeContainer from '../../motion/MarqueeContainer';

/**
 * HeroSection 컴포넌트
 *
 * DraftLanding의 첫 번째 섹션.
 * 전체 화면에 브랜드 로고를 표시하고, 하단에 히어로 메시지가 스크롤 마퀴로 흐른다.
 *
 * Props:
 * @param {string} heroMessage - 히어로 메시지 텍스트 [Required]
 * @param {object} widePx - 반응형 px 값 [Required]
 *
 * Example usage:
 * <HeroSection heroMessage="..." widePx={ widePx } />
 */
export function HeroSection({ heroMessage, widePx }) {
  return (
    <FullPageContainer
      align="center"
      justify="center"
      sx={ { bgcolor: 'transparent' } }
    >
      <PageContainer sx={ { px: widePx } }>
        <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
          <Typography
            variant="overline"
            sx={ {
              color: 'text.primary',
              letterSpacing: '0.2em',
              fontSize: (theme) => `calc(${theme.typography.overline.fontSize} * 2)`,
              mb: { xs: 2, md: 3 },
            } }
          >
            STATIONERY FOR DIGITAL MINDS
          </Typography>

          <StretchedHeadline
            text="DRAFT."
            fillWidth={ false }
            fontFamily='"Doto", monospace'
            fontSize="clamp(3.75rem, 18vw, 15rem)"
            fontWeight={ 700 }
            textTransform="none"
            sx={ { color: 'primary.main', width: '100%', textAlign: 'center' } }
          />
        </Box>
      </PageContainer>

      <Box sx={ { width: '100%', mt: { xs: 16, md: 28 } } }>
        <MarqueeContainer
          isScrollScrub
          isPauseOnHover={ false }
          gap={ 6 }
        >
          <Typography
            variant="h1"
            sx={ {
              color: 'text.primary',
              whiteSpace: 'nowrap',
            } }
          >
            { heroMessage }
          </Typography>
        </MarqueeContainer>
      </Box>
    </FullPageContainer>
  );
}

import { Box, Typography } from '@mui/material';
import { FullPageContainer } from '../../layout/FullPageContainer';
import { PageContainer } from '../../layout/PageContainer';
import { StretchedHeadline } from '../../typography/StretchedHeadline';

/**
 * HeroSection 컴포넌트
 *
 * DraftLanding의 첫 번째 섹션.
 * 전체 화면에 브랜드 로고와 태그라인, 히어로 메시지를 표시한다.
 *
 * Props:
 * @param {string} tagline - 브랜드 태그라인 [Required]
 * @param {string} heroMessage - 히어로 메시지 텍스트 [Required]
 * @param {object} widePx - 반응형 px 값 [Required]
 *
 * Example usage:
 * <HeroSection tagline="WRITE THE BLUEPRINT." heroMessage="..." widePx={ widePx } />
 */
export function HeroSection({ tagline, heroMessage, widePx }) {
  return (
    <FullPageContainer
      align="center"
      justify="center"
      sx={ { bgcolor: 'background.default' } }
    >
      <PageContainer sx={ { px: widePx } }>
        <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
          <Typography
            variant="overline"
            sx={ {
              color: 'text.primary',
              letterSpacing: '0.2em',
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

          <Typography
            variant="overline"
            sx={ {
              fontFamily: '"Doto", monospace',
              color: 'primary.main',
              letterSpacing: '0.15em',
              mt: { xs: 1, md: 2 },
            } }
          >
            { tagline }
          </Typography>

          <Typography
            variant="body1"
            sx={ {
              color: 'text.primary',
              mt: { xs: 8, md: 14 },
              maxWidth: '36ch',
              textAlign: 'center',
              lineHeight: 1.8,
            } }
          >
            { heroMessage }
          </Typography>
        </Box>
      </PageContainer>
    </FullPageContainer>
  );
}

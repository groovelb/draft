import { Box, Typography, Button, Divider } from '@mui/material';
import { FullPageContainer } from '../../layout/FullPageContainer';
import { PageContainer } from '../../layout/PageContainer';

/**
 * CtaSection 컴포넌트
 *
 * DraftLanding의 마지막 CTA/Footer 섹션.
 * 마감 메시지와 행동 유도 버튼을 전체 화면(70%)으로 표시한다.
 *
 * Props:
 * @param {string} closingMessage - 클로징 메시지 [Required]
 * @param {string} ctaText - CTA 버튼 텍스트 [Required]
 * @param {object} widePx - 반응형 px 값 [Required]
 *
 * Example usage:
 * <CtaSection closingMessage="..." ctaText="첫 번째 선을 긋다" widePx={ widePx } />
 */
export function CtaSection({ closingMessage, ctaText, widePx }) {
  return (
    <FullPageContainer
      heightRatio={ 0.7 }
      align="center"
      justify="center"
      sx={ { bgcolor: 'background.default' } }
    >
      <PageContainer sx={ { textAlign: 'center', px: widePx } }>
        <Typography
          variant="overline"
          sx={ {
            color: (theme) => theme.palette.accent?.main || '#B8956A',
            letterSpacing: '0.15em',
          } }
        >
          DRAFT.
        </Typography>

        <Typography
          variant="h1"
          sx={ { mt: 2, mb: 4 } }
        >
          Write Thoughts as You Draw Blueprints.
        </Typography>

        <Typography
          variant="body1"
          sx={ {
            color: 'text.primary',
            mb: 6,
            maxWidth: '45ch',
            mx: 'auto',
            lineHeight: 1.8,
            wordBreak: 'keep-all',
          } }
        >
          { closingMessage }
        </Typography>

        <Button
          variant="outlined"
          size="large"
          sx={ {
            borderColor: 'primary.main',
            color: 'primary.main',
            px: 6,
            py: 1.5,
            fontFamily: '"Doto", monospace',
            letterSpacing: '0.05em',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'white',
            },
          } }
        >
          { ctaText }
        </Button>

        <Box sx={ { mt: { xs: 10, md: 16 }, width: '100%' } }>
          <Divider sx={ { borderColor: 'primary.main', mb: 3 } } />
          <Typography variant="caption" sx={ { color: 'text.primary' } }>
            DRAFT. — WRITE THE BLUEPRINT.
          </Typography>
        </Box>
      </PageContainer>
    </FullPageContainer>
  );
}

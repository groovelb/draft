import { Box, Typography, Button, Divider } from '@mui/material';
import { FullPageContainer } from '../../layout/FullPageContainer';
import { PageContainer } from '../../layout/PageContainer';

/**
 * CtaSection 컴포넌트
 *
 * DraftLanding의 마지막 CTA/Footer 섹션.
 * 마감 메시지와 행동 유도 버튼을 전체 화면으로 표시한다.
 * FooterShifting 내부에서 Sticky Footer Reveal 패턴으로 사용된다.
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
      align="center"
      justify="center"
      sx={ { bgcolor: '#111111' } }
    >
      <PageContainer
        sx={ {
          textAlign: 'center',
          px: widePx,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: { xs: 6, md: 10 },
        } }
      >
        {/* 상단 — 브랜드 라벨 */}
        <Typography
          variant="overline"
          sx={ {
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.15em',
          } }
        >
          DRAFT.
        </Typography>

        {/* 중앙 — 메인 메시지 + CTA */}
        <Box sx={ { textAlign: 'center' } }>
          <Typography
            variant="h1"
            sx={ { mb: 6, color: 'common.white' } }
          >
            Write Thoughts as You Draw Blueprints.
          </Typography>

          <Typography
            variant="body1"
            sx={ {
              color: 'rgba(255,255,255,0.7)',
              mb: 8,
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
              borderColor: 'common.white',
              color: 'common.white',
              px: 10,
              py: 2.5,
              fontSize: '1.25rem',
              fontFamily: '"Doto", monospace',
              letterSpacing: '0.05em',
              '&:hover': {
                bgcolor: 'common.white',
                color: '#111111',
              },
            } }
          >
            { ctaText }
          </Button>
        </Box>

        {/* 하단 — 푸터 */}
        <Box sx={ { width: '100%' } }>
          <Divider sx={ { borderColor: 'rgba(255,255,255,0.2)', mb: 3 } } />
          <Typography variant="caption" sx={ { color: 'rgba(255,255,255,0.4)' } }>
            DRAFT. — WRITE THE BLUEPRINT.
          </Typography>
        </Box>
      </PageContainer>
    </FullPageContainer>
  );
}

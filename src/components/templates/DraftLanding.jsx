import { Box, Typography, Button, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import { FullPageContainer } from '../layout/FullPageContainer';
import { PageContainer } from '../layout/PageContainer';
import { SectionContainer } from '../container/SectionContainer';
import LineGrid from '../layout/LineGrid';
import { PhiSplit } from '../layout/PhiSplit';
import { RatioContainer } from '../container/RatioContainer';
import { Title } from '../typography/Title';
import { StretchedHeadline } from '../typography/StretchedHeadline';
import brandData from '../../docs/brand-draft.json';

/** 일러스트 플레이스홀더 공통 스타일 */
const placeholderSx = {
  border: '1px dashed',
  borderColor: 'primary.main',
  backgroundColor: 'rgba(0, 61, 165, 0.03)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

/** 넓은 여백 (에디토리얼 인쇄물 느낌) */
const widePx = { xs: 3, sm: 6, md: 12, lg: 20 };

/**
 * DraftLanding 템플릿
 *
 * "DRAFT." 문구 브랜드의 미니멀 랜딩 페이지.
 * Blueprint 미학과 에디토리얼 인쇄물 느낌의 레이아웃.
 * LineGrid를 활용하여 도면 느낌의 그리드 구조를 시각화한다.
 *
 * 동작 방식:
 * 1. 전체 화면 Hero에서 "DRAFT."가 Silkscreen 픽셀 폰트로 표시됨
 * 2. 브랜드 스토리가 황금비 분할 레이아웃으로 펼쳐짐
 * 3. Core Values 4열 LineGrid로 표시
 * 4. USP 2x2 LineGrid로 표시
 * 5. Product Lines 3개 라인이 각 3열 LineGrid로 제품 목록 표시
 * 6. CTA 섹션에서 마감 메시지와 행동 유도 버튼
 *
 * Props:
 * @param {object} data - 브랜드 데이터 (brand-draft.json 형식) [Optional, 기본값: 내장 데이터]
 * @param {object} sx - 최상위 컨테이너 추가 스타일 [Optional]
 *
 * Example usage:
 * <DraftLanding />
 * <DraftLanding data={ customBrandData } />
 */
export function DraftLanding({ data = brandData, sx }) {
  return (
    <Box sx={ { bgcolor: 'background.default', ...sx } }>

      {/* ============================================================
          Section 1: Hero
          ============================================================ */}
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
                color: 'text.secondary',
                letterSpacing: '0.2em',
                mb: { xs: 2, md: 3 },
              } }
            >
              STATIONERY FOR DIGITAL MINDS
            </Typography>

            <StretchedHeadline
              text="DRAFT."
              fontFamily='"Silkscreen", monospace'
              fontSize="clamp(3rem, 15vw, 12rem)"
              fontWeight={ 700 }
              textTransform="none"
              sx={ { color: 'primary.main', width: '100%' } }
            />

            <Typography
              variant="overline"
              sx={ {
                fontFamily: '"Silkscreen", monospace',
                color: 'primary.main',
                letterSpacing: '0.15em',
                mt: { xs: 1, md: 2 },
                fontSize: { xs: '0.625rem', md: '0.75rem' },
              } }
            >
              { data.brand.tagline }
            </Typography>

            <Typography
              variant="body1"
              sx={ {
                color: 'text.secondary',
                mt: { xs: 8, md: 14 },
                maxWidth: '36ch',
                textAlign: 'center',
                lineHeight: 1.8,
              } }
            >
              { data.message.hero }
            </Typography>
          </Box>
        </PageContainer>
      </FullPageContainer>

      {/* ============================================================
          Section 2: Brand Story
          ============================================================ */}
      <SectionContainer sx={ { py: { xs: 10, md: 16 } } }>
        <PageContainer sx={ { px: widePx } }>
          <LineGrid gap={ 48 } borderColor="primary.main">

            {/* Block 1: 브랜드 스토리 텍스트 */}
            <PhiSplit
              primary={
                <Title
                  overline="BRAND STORY"
                  title="The Blueprint of Ideas"
                  level="h2"
                />
              }
              secondary={
                <Typography
                  variant="body1"
                  sx={ {
                    color: 'text.secondary',
                    lineHeight: 2,
                    wordBreak: 'keep-all',
                  } }
                >
                  { data.message.body }
                </Typography>
              }
              gap={ 6 }
              stackAt="md"
            />

            {/* Block 2: 일러스트 + 클로징 */}
            <PhiSplit
              isReversed
              primary={
                <Box
                  sx={ {
                    ...placeholderSx,
                    height: { xs: 200, md: 300 },
                  } }
                >
                  <Typography variant="caption" sx={ { color: 'text.disabled' } }>
                    Brand Illustration
                  </Typography>
                </Box>
              }
              secondary={
                <Typography
                  variant="body1"
                  sx={ {
                    color: 'text.secondary',
                    lineHeight: 2,
                    wordBreak: 'keep-all',
                  } }
                >
                  { data.message.closing }
                </Typography>
              }
              gap={ 6 }
              stackAt="md"
            />
          </LineGrid>
        </PageContainer>
      </SectionContainer>

      {/* ============================================================
          Section 3: Core Values
          ============================================================ */}
      <SectionContainer sx={ { py: { xs: 10, md: 16 }, bgcolor: 'background.paper' } }>
        <PageContainer sx={ { px: widePx } }>
          <Title
            overline="CORE VALUES"
            title="도면 위에 세운 원칙"
            level="h3"
            sx={ { mb: { xs: 6, md: 10 } } }
          />

          <LineGrid container gap={ 32 } borderColor="primary.main">
            { data.coreValues.map((value, index) => (
              <Grid size={ { xs: 12, sm: 6, md: 3 } } key={ value.key }>
                <Box sx={ { py: { xs: 2, md: 3 } } }>
                  {/* 일러스트 placeholder */}
                  <Box
                    sx={ {
                      ...placeholderSx,
                      aspectRatio: '1 / 1',
                      mb: 3,
                    } }
                  >
                    <Typography variant="caption" sx={ { color: 'text.disabled' } }>
                      { value.key }
                    </Typography>
                  </Box>

                  {/* 넘버링 */}
                  <Typography
                    variant="overline"
                    sx={ { color: 'primary.main' } }
                  >
                    { `0${index + 1}` }
                  </Typography>

                  {/* 라벨 */}
                  <Typography variant="h5" sx={ { mt: 0.5 } }>
                    { value.label }
                  </Typography>

                  {/* 설명 */}
                  <Typography
                    variant="body2"
                    sx={ {
                      color: 'text.secondary',
                      mt: 1,
                      lineHeight: 1.8,
                      wordBreak: 'keep-all',
                    } }
                  >
                    { value.description }
                  </Typography>
                </Box>
              </Grid>
            )) }
          </LineGrid>
        </PageContainer>
      </SectionContainer>

      {/* ============================================================
          Section 4: USP
          ============================================================ */}
      <SectionContainer sx={ { py: { xs: 10, md: 16 } } }>
        <PageContainer sx={ { px: widePx } }>
          <Title
            overline="WHY DRAFT."
            title="디지털 시대의 아날로그"
            level="h3"
            sx={ { mb: { xs: 6, md: 10 } } }
          />

          <LineGrid container gap={ 40 } borderColor="primary.main">
            { data.usp.map((item) => (
              <Grid size={ { xs: 12, md: 6 } } key={ item.key }>
                <Box sx={ { py: { xs: 2, md: 4 } } }>
                  <Typography
                    variant="overline"
                    sx={ {
                      color: (theme) => theme.palette.accent?.main || '#B8956A',
                    } }
                  >
                    { item.key.replace(/-/g, ' ') }
                  </Typography>

                  <Typography variant="h4" sx={ { mt: 1 } }>
                    { item.label }
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={ {
                      color: 'text.secondary',
                      mt: 2,
                      maxWidth: '50ch',
                      lineHeight: 1.8,
                      wordBreak: 'keep-all',
                    } }
                  >
                    { item.description }
                  </Typography>
                </Box>
              </Grid>
            )) }
          </LineGrid>
        </PageContainer>
      </SectionContainer>

      {/* ============================================================
          Section 5: Product Lines
          ============================================================ */}
      <SectionContainer sx={ { py: { xs: 10, md: 16 }, bgcolor: 'background.paper' } }>
        <PageContainer sx={ { px: widePx } }>
          <Title
            overline="PRODUCT LINES"
            title="세 가지 도구의 체계"
            level="h3"
            sx={ { mb: { xs: 6, md: 10 } } }
          />

          <LineGrid gap={ 64 } borderColor="primary.main">
            { data.products.map((line) => (
              <Box key={ line.line }>
                {/* 라인 헤더 */}
                <Box sx={ { mb: { xs: 4, md: 6 } } }>
                  <Typography
                    sx={ {
                      fontFamily: '"Silkscreen", monospace',
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      color: 'primary.main',
                      fontWeight: 700,
                    } }
                  >
                    { line.line }
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={ { color: 'text.secondary', mt: 1 } }
                  >
                    { line.concept }
                  </Typography>
                </Box>

                {/* 제품 그리드 */}
                <LineGrid container gap={ 24 } borderColor="primary.main">
                  { line.items.map((item) => (
                    <Grid size={ { xs: 12, sm: 4 } } key={ item.name }>
                      {/* 일러스트 placeholder */}
                      <RatioContainer
                        ratio="4:3"
                        sx={ placeholderSx }
                      >
                        <Typography variant="caption" sx={ { color: 'text.disabled' } }>
                          { item.name }
                        </Typography>
                      </RatioContainer>

                      {/* 제품 정보 */}
                      <Box sx={ { mt: 2 } }>
                        <Typography variant="subtitle2">
                          { item.name }
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={ {
                            color: 'text.secondary',
                            mt: 0.5,
                            wordBreak: 'keep-all',
                          } }
                        >
                          { item.description }
                        </Typography>
                      </Box>
                    </Grid>
                  )) }
                </LineGrid>
              </Box>
            )) }
          </LineGrid>
        </PageContainer>
      </SectionContainer>

      {/* ============================================================
          Section 6: CTA / Footer
          ============================================================ */}
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
            variant="h2"
            sx={ { mt: 2, mb: 4 } }
          >
            도면을 그리듯, 생각을 적는다.
          </Typography>

          <Typography
            variant="body1"
            sx={ {
              color: 'text.secondary',
              mb: 6,
              maxWidth: '45ch',
              mx: 'auto',
              lineHeight: 1.8,
              wordBreak: 'keep-all',
            } }
          >
            { data.message.closing }
          </Typography>

          <Button
            variant="outlined"
            size="large"
            sx={ {
              borderColor: 'primary.main',
              color: 'primary.main',
              px: 6,
              py: 1.5,
              fontFamily: '"Silkscreen", monospace',
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            } }
          >
            { data.message.cta }
          </Button>

          {/* Footer */}
          <Box sx={ { mt: { xs: 10, md: 16 }, width: '100%' } }>
            <Divider sx={ { borderColor: 'primary.main', mb: 3 } } />
            <Typography variant="caption" sx={ { color: 'text.disabled' } }>
              DRAFT. — WRITE THE BLUEPRINT.
            </Typography>
          </Box>
        </PageContainer>
      </FullPageContainer>
    </Box>
  );
}

export default DraftLanding;

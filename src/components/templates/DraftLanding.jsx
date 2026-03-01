import { useRef } from 'react';
import { Box } from '@mui/material';
import brandData from '../../docs/brand-draft.json';
import LineGrid from '../layout/LineGrid';
import FooterShifting from '../layout/FooterShifting';
import GradientOverlay from '../dynamic-color/GradientOverlay';

import { HeroSection } from './draft-landing/HeroSection';
import { BrandStorySection } from './draft-landing/BrandStorySection';
import { CoreValuesSection } from './draft-landing/CoreValuesSection';
import { UspSection } from './draft-landing/UspSection';
import { ProductLinesSection } from './draft-landing/ProductLinesSection';
import { CtaSection } from './draft-landing/CtaSection';

/** 격자 그리드 갭 — 0 (라인이 셀 경계에 위치) */
const GRID_GAP = 0;

/** Hero, CTA 중앙 배치 섹션용 여백 */
const widePx = { xs: 3, sm: 6, md: 12, lg: 20 };

/**
 * DraftLanding 템플릿
 *
 * "DRAFT." 문구 브랜드의 미니멀 랜딩 페이지.
 * Visible Editorial Grid — 모든 섹션이 full-bleed 격자로 분할된다.
 * gap=0으로 라인이 셀 경계에 위치하며, 콘텐츠는 셀 내부 패딩으로 여백 확보.
 *
 * 배경 전환:
 * GradientOverlay(WebGL)가 fixed 배경으로 깔리며,
 * ProductLinesSection 진입 시 Simplex Noise 물결 경계면으로
 * 밝은색(#F4F5F7) → 파란색(#003DA5) 유기적 전환.
 *
 * 푸터:
 * FooterShifting으로 CtaSection을 감싸 스크롤 종료 시
 * 콘텐츠 아래에서 CTA 푸터가 드러나는 Sticky Footer Reveal 효과 적용.
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
  const productLineRef = useRef(null);

  return (
    <Box sx={ { position: 'relative' } }>
      <GradientOverlay
        colorLight="#F4F5F7"
        colorDark="#003DA5"
        scrollInRef={ productLineRef }
        offset={ 0.5 }
        isGrain={ true }
        grainIntensity={ 0.025 }
      />

      <FooterShifting
        overlayColor="#003DA5"
        footer={
          <CtaSection
            closingMessage={ data.message.closing }
            ctaText={ data.message.cta }
            widePx={ widePx }
          />
        }
      >
        <LineGrid
          gap={ GRID_GAP }
          borderColor="text.primary"
          sx={ {
            bgcolor: 'transparent',
            position: 'relative',
            zIndex: 2,
            ...sx,
          } }
        >
          <HeroSection
            heroMessage={ data.message.hero }
            widePx={ widePx }
          />

          <BrandStorySection
            bodyMessage={ data.message.body }
            closingMessage={ data.message.closing }
            gridGap={ GRID_GAP }
          />

          <CoreValuesSection
            coreValues={ data.coreValues }
            gridGap={ GRID_GAP }
          />

          <UspSection
            usp={ data.usp }
            gridGap={ GRID_GAP }
          />

          <Box ref={ productLineRef }>
            <ProductLinesSection
              products={ data.products }
              gridGap={ GRID_GAP }
            />
          </Box>
        </LineGrid>
      </FooterShifting>
    </Box>
  );
}

export default DraftLanding;

import { Box } from '@mui/material';
import brandData from '../../docs/brand-draft.json';

import { HeroSection } from './draft-landing/HeroSection';
import { BrandStorySection } from './draft-landing/BrandStorySection';
import { CoreValuesSection } from './draft-landing/CoreValuesSection';
import { UspSection } from './draft-landing/UspSection';
import { ProductLinesSection } from './draft-landing/ProductLinesSection';
import { CtaSection } from './draft-landing/CtaSection';

/** LineGrid 공통 gap (px) */
const GRID_GAP = 64;

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
 * 1. 전체 화면 Hero에서 "DRAFT."가 Doto 폰트로 표시됨
 * 2. 브랜드 스토리가 황금비 분할 레이아웃으로 펼쳐짐
 * 3. Core Values 2x2 LineGrid로 표시
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
      <HeroSection
        tagline={ data.brand.tagline }
        heroMessage={ data.message.hero }
        widePx={ widePx }
      />

      <BrandStorySection
        bodyMessage={ data.message.body }
        closingMessage={ data.message.closing }
        gridGap={ GRID_GAP }
        widePx={ widePx }
      />

      <CoreValuesSection
        coreValues={ data.coreValues }
        gridGap={ GRID_GAP }
        widePx={ widePx }
      />

      <UspSection
        usp={ data.usp }
        gridGap={ GRID_GAP }
        widePx={ widePx }
      />

      <ProductLinesSection
        products={ data.products }
        gridGap={ GRID_GAP }
        widePx={ widePx }
      />

      <CtaSection
        closingMessage={ data.message.closing }
        ctaText={ data.message.cta }
        widePx={ widePx }
      />
    </Box>
  );
}

export default DraftLanding;

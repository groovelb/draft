import { DraftLanding } from './DraftLanding';

export default {
  title: 'Page/DraftLanding',
  component: DraftLanding,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## DraftLanding

"DRAFT." 문구 브랜드의 미니멀 랜딩 페이지 템플릿입니다.

### 디자인 컨셉
- **Blueprint 미학**: LineGrid로 도면 느낌의 그리드 라인 시각화
- **Doto 헤드라인**: 모든 헤드라인에 Doto 기하학적 도트매트릭스 폰트 적용
- **Analog Warmth**: Aged Paper 배경, Noto Serif KR 본문, Warm Leather 보조색

### 섹션 구조 (모듈화)
1. **HeroSection** — 전체 화면, Doto 폰트 브랜드 로고
2. **BrandStorySection** — 황금비 분할 에디토리얼 레이아웃
3. **CoreValuesSection** — 2x2 LineGrid + CoreValueCard
4. **UspSection** — 2x2 LineGrid + UspCard
5. **ProductLinesSection** — ProductLineBlock × 3, ProductCard × 9
6. **CtaSection** — 마감 메시지와 CTA 버튼

### 사용된 컴포넌트
FullPageContainer, LineGrid, PhiSplit, PageContainer, Title, StretchedHeadline, MarqueeContainer, BlueprintReveal, GradientOverlay, FooterShifting
        `,
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: '브랜드 데이터 (brand-draft.json 형식)',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: 'brandData' },
      },
    },
  },
};

/** 기본 랜딩 페이지 */
export const Default = {};


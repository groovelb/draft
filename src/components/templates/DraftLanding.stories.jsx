import { DraftLanding } from './DraftLanding';

export default {
  title: 'Template/DraftLanding',
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
- **에디토리얼 인쇄물**: 넓은 여백, 세리프 헤딩, 절제된 타이포그래피
- **Analog Warmth**: Aged Paper 배경, Warm Leather 보조색

### 섹션 구조
1. **Hero** — 전체 화면, Silkscreen 픽셀 폰트 브랜드 로고
2. **Brand Story** — 황금비 분할 에디토리얼 레이아웃
3. **Core Values** — 4열 LineGrid
4. **USP** — 2x2 LineGrid
5. **Product Lines** — 3라인 × 3제품 중첩 LineGrid
6. **CTA / Footer** — 마감 메시지와 CTA 버튼

### 사용된 컴포넌트
FullPageContainer, LineGrid, PhiSplit, PageContainer, SectionContainer, Title, StretchedHeadline, RatioContainer
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

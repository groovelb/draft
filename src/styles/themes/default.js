/**
 * Default Theme — Blueprint Stationery
 *
 * 성인 남성을 위한 문구 브랜드 "The Blueprint of Ideas"의 디자인 토큰입니다.
 * 피그마의 Design Tokens / Variables와 동일한 역할입니다.
 *
 * ## 브랜드 비주얼 필러
 * - **Blueprint Precision**: Blueprint Blue (#003DA5), 그리드 시스템
 * - **Cool Paper**: Blue-tinted Paper (#EEF1F6) 배경, 도면 종이 느낌
 * - **Black Ink**: 검정 잉크 (#111111) 텍스트
 * - **Pixel Heritage**: Doto 기하학적 도트매트릭스 디스플레이 폰트
 * - **Masculine Restraint**: 절제된 팔레트, borderRadius 0
 *
 * ## 타이포그래피 2-tier
 * - Heading / Display: Doto (geometric dot-matrix)
 * - Body: Noto Serif KR (serif, 한국어 가독성)
 */

import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// ============================================================
// 1. Color Tokens (색상 토큰)
// ============================================================
const palette = {
  mode: 'light',

  // 브랜드 색상 — Blueprint Blue
  primary: {
    light: '#4D6FC4',
    main: '#003DA5',
    dark: '#002266',
    contrastText: '#FFFFFF',
  },
  // 보조 색상 — Warm Leather (크래프트/가죽)
  secondary: {
    light: '#7A6B58',
    main: '#5C4A3A',
    dark: '#3D3224',
    contrastText: '#FFFFFF',
  },

  // 상태 색상 (Feedback)
  error: {
    light: '#ef5350',
    main: '#d32f2f',
    dark: '#c62828',
    contrastText: '#FFFFFF',
  },
  warning: {
    light: '#ff9800',
    main: '#ed6c02',
    dark: '#e65100',
    contrastText: '#FFFFFF',
  },
  success: {
    light: '#4caf50',
    main: '#2e7d32',
    dark: '#1b5e20',
    contrastText: '#FFFFFF',
  },
  info: {
    light: '#03a9f4',
    main: '#0288d1',
    dark: '#01579b',
    contrastText: '#FFFFFF',
  },

  // 텍스트 색상 — Ink (살짝 파란 틸트의 잉크)
  text: {
    primary: '#10131A',
    secondary: '#4A4D55',
    disabled: 'rgba(16, 19, 26, 0.38)',
  },

  // 배경 색상 — Cool Paper (미세한 블루 틴트 종이)
  background: {
    default: '#F4F5F7',
    paper: '#F9FAFB',
  },

  // 구분선
  divider: 'rgba(16, 19, 26, 0.12)',

  // 액션 상태
  action: {
    active: 'rgba(16, 19, 26, 0.54)',
    hover: 'rgba(16, 19, 26, 0.04)',
    selected: 'rgba(16, 19, 26, 0.08)',
    disabled: 'rgba(16, 19, 26, 0.26)',
    disabledBackground: 'rgba(16, 19, 26, 0.12)',
    focus: 'rgba(16, 19, 26, 0.12)',
  },

  // Grey 스케일
  grey: {
    50: grey[50],
    100: grey[100],
    200: grey[200],
    300: grey[300],
    400: grey[400],
    500: grey[500],
    600: grey[600],
    700: grey[700],
    800: grey[800],
    900: grey[900],
  },

  // 커스텀 브랜드 색상 (accent)
  accent: {
    main: '#B8956A',
    light: '#D4B896',
    dark: '#8C6D45',
  },
};

// ============================================================
// 2. Typography Tokens (타이포그래피 토큰)
// ============================================================

// 폰트 패밀리 정의
const dotoStack = '"Doto", monospace';
const bodyStack = [
  '"Noto Serif KR"',
  '"Noto Serif"',
  'Georgia',
  '"Times New Roman"',
  'serif',
].join(',');

const typography = {
  // 기본 폰트 패밀리 (본문)
  fontFamily: bodyStack,

  // 헤딩 폰트 패밀리 (Doto — 기하학적 도트매트릭스)
  headingFontFamily: dotoStack,

  // 디스플레이 폰트 패밀리 (Doto — 브랜드 마크)
  displayFontFamily: dotoStack,

  // 폰트 크기 기준
  fontSize: 14,
  htmlFontSize: 16,

  // 폰트 굵기
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  // 헤딩 스타일 — Doto (geometric dot-matrix)
  h1: {
    fontFamily: dotoStack,
    fontWeight: 900,
    fontSize: '4.5rem',      // 72px — CTA, 페이지 레벨
    lineHeight: 1.1,
    letterSpacing: '-0.04em',
    wordSpacing: '0.12em',
  },
  h2: {
    fontFamily: dotoStack,
    fontWeight: 900,
    fontSize: '3.125rem',    // 50px — 섹션 타이틀
    lineHeight: 1.15,
    letterSpacing: '-0.03em',
    wordSpacing: '0.1em',
  },
  h3: {
    fontFamily: dotoStack,
    fontWeight: 900,
    fontSize: '2.5rem',      // 40px — 카테고리 타이틀
    lineHeight: 1.2,
    letterSpacing: '-0.03em',
    wordSpacing: '0.08em',
  },
  h4: {
    fontFamily: dotoStack,
    fontWeight: 900,
    fontSize: '1.875rem',    // 30px (24×1.25)
    lineHeight: 1.3,
    letterSpacing: '-0.02em',
    wordSpacing: '0.06em',
  },
  h5: {
    fontFamily: dotoStack,
    fontWeight: 900,
    fontSize: '1.563rem',    // 25px (20×1.25)
    lineHeight: 1.35,
    letterSpacing: '-0.02em',
    wordSpacing: '0.06em',
  },
  h6: {
    fontFamily: dotoStack,
    fontWeight: 900,
    fontSize: '1.4rem',      // ~22px (18×1.25)
    lineHeight: 1.4,
    letterSpacing: '-0.02em',
    wordSpacing: '0.06em',
  },

  // 본문 스타일 — Noto Serif KR (serif)
  // 반응형: 모바일/태블릿에서 본문 축소
  body1: {
    fontSize: '1.25rem',     // 20px (16×1.25)
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0',
    '@media (max-width:899.95px)': { fontSize: '1.125rem' },
    '@media (max-width:599.95px)': { fontSize: '1.1rem' },
  },
  body2: {
    fontSize: '1.1rem',      // ~18px (14×1.25)
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0',
    '@media (max-width:899.95px)': { fontSize: '1rem' },
    '@media (max-width:599.95px)': { fontSize: '1rem' },
  },

  // 부제목
  subtitle1: {
    fontSize: '1.25rem',     // 20px (16×1.25)
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
    '@media (max-width:899.95px)': { fontSize: '1.125rem' },
    '@media (max-width:599.95px)': { fontSize: '1rem' },
  },
  subtitle2: {
    fontSize: '1.1rem',      // ~18px (14×1.25)
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
    '@media (max-width:899.95px)': { fontSize: '1rem' },
    '@media (max-width:599.95px)': { fontSize: '0.938rem' },
  },

  // 기타
  button: {
    fontSize: '1.1rem',      // ~18px (14×1.25)
    fontWeight: 600,
    lineHeight: 1.75,
    letterSpacing: '0.02em',
    textTransform: 'none',   // 대문자 변환 비활성화
    '@media (max-width:899.95px)': { fontSize: '1rem' },
    '@media (max-width:599.95px)': { fontSize: '0.938rem' },
  },
  caption: {
    fontSize: '0.938rem',    // 15px (12×1.25)
    lineHeight: 1.5,
    letterSpacing: '0.02em',
    '@media (max-width:899.95px)': { fontSize: '0.875rem' },
    '@media (max-width:599.95px)': { fontSize: '0.813rem' },
  },
  overline: {
    fontSize: '0.938rem',    // 15px (12×1.25)
    fontWeight: 600,
    lineHeight: 2,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    '@media (max-width:899.95px)': { fontSize: '0.875rem' },
    '@media (max-width:599.95px)': { fontSize: '0.75rem' },
  },
};

// ============================================================
// 3. Spacing Token (간격 토큰)
// ============================================================
const spacing = 8; // 기본 단위: 8px

// ============================================================
// 4. Shape Token (모양 토큰)
// ============================================================
const shape = {
  borderRadius: 0, // Sharp corners (0px)
};

// ============================================================
// 5. Shadow Tokens (그림자 토큰)
// ============================================================
const customShadows = {
  none: 'none',
  sm: '0 0 12px rgba(0, 0, 0, 0.06)',
  md: '0 0 16px rgba(0, 0, 0, 0.08)',
  lg: '0 0 20px rgba(0, 0, 0, 0.10)',
  xl: '0 0 24px rgba(0, 0, 0, 0.12)',
};

// ============================================================
// 6. Breakpoints (브레이크포인트)
// ============================================================
const breakpoints = {
  values: {
    xs: 0,      // 모바일
    sm: 600,    // 태블릿 세로
    md: 900,    // 태블릿 가로
    lg: 1200,   // 데스크톱
    xl: 1536,   // 대형 데스크톱
  },
};

// ============================================================
// 7. Z-Index (레이어 순서)
// ============================================================
const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

// ============================================================
// 8. Transitions (전환 효과)
// ============================================================
const transitions = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
};

// ============================================================
// 9. Component Overrides (컴포넌트 오버라이드)
// ============================================================
const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarWidth: 'thin',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: customShadows.lg,
      },
      elevation0: {
        boxShadow: customShadows.none,
      },
      elevation1: {
        boxShadow: customShadows.sm,
      },
      elevation2: {
        boxShadow: customShadows.md,
      },
      elevation3: {
        boxShadow: customShadows.lg,
      },
      elevation4: {
        boxShadow: customShadows.xl,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        textTransform: 'none',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 4,
      },
    },
  },
};

// ============================================================
// Theme 생성
// ============================================================
const defaultTheme = createTheme({
  palette,
  typography,
  spacing,
  shape,
  breakpoints,
  zIndex,
  transitions,
  components,
});

// 커스텀 속성 추가 (타입 확장 없이 접근 가능하도록)
defaultTheme.customShadows = customShadows;

/**
 * 대시보드 스타일 설정 (Blueprint Stationery)
 */
defaultTheme.dashboard = {
  style: 'default',
  iconStyle: 'outlined',
  iconWeight: 400,
  cardBorderRadius: 0,
  cardColors: [
    'linear-gradient(to bottom, #F9FAFB 0%, #F9FAFB 100%)',
    'linear-gradient(to bottom, #F9FAFB 0%, #F9FAFB 100%)',
    'linear-gradient(to bottom, #F9FAFB 0%, #F9FAFB 100%)',
    'linear-gradient(to bottom, #F9FAFB 0%, #F9FAFB 100%)',
    'linear-gradient(to bottom, #F9FAFB 0%, #F9FAFB 100%)',
    'linear-gradient(to bottom, #F9FAFB 0%, #F9FAFB 100%)',
  ],
  subCardColors: [
    'linear-gradient(to bottom, #F4F5F7 0%, #F4F5F7 100%)',
    'linear-gradient(to bottom, #F4F5F7 0%, #F4F5F7 100%)',
    'linear-gradient(to bottom, #F4F5F7 0%, #F4F5F7 100%)',
    'linear-gradient(to bottom, #F4F5F7 0%, #F4F5F7 100%)',
    'linear-gradient(to bottom, #F4F5F7 0%, #F4F5F7 100%)',
    'linear-gradient(to bottom, #F4F5F7 0%, #F4F5F7 100%)',
  ],
  textColor: palette.text.primary,
  textSecondary: palette.text.secondary,
  textShadow: '0 0 0 rgba(0, 0, 0, 0)',
  backdropFilter: 'blur(0px)',
  WebkitBackdropFilter: 'blur(0px)',
  border: '1px solid rgba(16, 19, 26, 0.08)',
  borderColor: 'rgba(16, 19, 26, 0.08)',
  shadow: customShadows.lg,
  subBorder: '1px solid rgba(16, 19, 26, 0.06)',
  subShadow: '0 0 0 rgba(0, 0, 0, 0)',
  subBackdropFilter: 'blur(0px)',
  subBorderRadius: 0,
  dividerColor: 'rgba(16, 19, 26, 0.12)',
  progressHeight: 6,
  progressTrackColor: 'rgba(16, 19, 26, 0.08)',
  progressBarColor: palette.primary.main,
  progressGradient: false,
  progressBorderRadius: 0,
  background: '#F4F5F7',
  atmosphere: 'linear-gradient(to bottom, #F4F5F7 0%, #F9FAFB 100%)',
  atmosphereOpacity: 0,
  accentColor: palette.primary.main,
  accentColors: {
    wind: '#4DB6AC',
    humidity: '#FFB74D',
    uvIndex: '#FF8A65',
    pressure: '#64B5F6',
  },
  blobs: null,
};

export default defaultTheme;

// 개별 토큰 내보내기 (문서화용)
export {
  palette,
  typography,
  spacing,
  shape,
  customShadows,
  breakpoints,
  zIndex,
  transitions,
  components,
};

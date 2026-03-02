import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {
  DocumentTitle,
  PageContainer,
  TreeNode,
} from '../../components/storybookDocumentation';

export default {
  title: 'Overview/Component Hierarchy',
  parameters: {
    layout: 'padded',
  },
};

/**
 * DraftLanding 전체 컴포넌트 계층.
 * 객체 = 펼침/접힘 노드 (▶/▼), 문자열 = 리프 노드.
 */
const hierarchy = {
  'GradientOverlay [dynamic-color]': {
    'colorLight': '#F4F5F7',
    'colorDark': '#003DA5',
    'scrollInRef': 'productLineRef → ProductLinesSection 진입 시 전환',
    'offset': 0.5,
    'isGrain': true,
    'grainIntensity': 0.025,
  },
  'FooterShifting [layout] — Sticky Footer Reveal': {
    'overlayColor': '#003DA5',
    'children → LineGrid [layout] (Root)': {
      'gap': 0,
      'borderColor': 'text.primary',
      'bgcolor': 'transparent',
      'zIndex': 2,
      'HeroSection [section]': {
        'FullPageContainer [layout]': {
          'bgcolor': 'transparent',
          'align': 'center',
          'justify': 'center',
        },
        'PageContainer [layout]': {
          'px': 'widePx (xs:3, sm:6, md:12, lg:20)',
        },
        'Typography overline': '"STATIONERY FOR DIGITAL MINDS" — letterSpacing 0.2em, fontSize ×2',
        'StretchedHeadline [typography]': {
          'text': 'DRAFT.',
          'fontFamily': '"Doto", monospace',
          'fontSize': 'clamp(3.75rem, 18vw, 15rem)',
          'fontWeight': 700,
          'color': 'primary.main',
          'fillWidth': false,
        },
        'MarqueeContainer [motion]': {
          'isScrollScrub': true,
          'isPauseOnHover': false,
          'gap': 6,
          'Typography h1': 'heroMessage — whiteSpace nowrap',
        },
      },
      'BrandStorySection [section]': {
        'LineGrid [layout]': {
          'gap': 0,
          'borderColor': 'text.primary',
        },
        'PhiSplit [layout] (body)': {
          'gap': 6,
          'stackAt': 'md',
          'primary — Title [typography]': '"The Blueprint of Ideas" — h1',
          'secondary — Typography body1': 'bodyMessage — lineHeight 2, wordBreak keep-all, first-letter drop cap',
        },
        'PhiSplit [layout] (closing, isReversed)': {
          'isReversed': true,
          'gap': 6,
          'stackAt': 'md',
          'primary — BlueprintGrid [layout]': {
            'BlueprintReveal [motion]': {
              'stagger': 200,
              'duration': 800,
              'converge': 0.3,
              'BrandHero SVG': 'brand-hero.svg — aria-label "The Blueprint Desk"',
            },
          },
          'secondary — Typography body1': 'closingMessage — lineHeight 2, wordBreak keep-all, first-letter drop cap',
        },
      },
      'CoreValuesSection [section]': {
        'LineGrid [layout] (outer)': {
          'gap': 0,
          'borderColor': 'text.primary',
        },
        'Title [typography]': '"Principles Drawn on the Blueprint" — h1',
        'LineGrid [layout] (2×2 grid, container)': {
          'Grid size': '{ xs:12, sm:6 }',
          'CoreValueCard ×4 [component]': {
            'Typography h2 (numbering)': '"01" "02" "03" "04" — primary.main',
            'Typography h2 (title)': 'PRECISION, ORIGIN, RESTRAINT, CRAFT — text.primary',
            'Divider': 'borderColor text.primary, opacity 0.3',
            'BlueprintGrid [layout]': {
              'BlueprintReveal [motion]': {
                'stagger': 150,
                'duration': 700,
                'converge': 0.4,
                'Illustration SVG ×4': 'ValuePrecision, ValueOrigin, ValueRestraint, ValueCraft — aspect 1:1',
              },
            },
            'Divider (bottom)': 'borderColor text.primary, opacity 0.3',
            'Typography body1 (description)': '가치 설명 — wordBreak keep-all, first-letter drop cap',
          },
        },
      },
      'UspSection [section]': {
        'LineGrid [layout] (outer)': {
          'gap': 0,
          'borderColor': 'text.primary',
        },
        'Title [typography]': '"Analog for the Digital Age" — h1',
        'LineGrid [layout] (4-col grid, container)': {
          'Grid size': '{ xs:12, sm:6, md:3 }',
          'UspCard ×4 [component]': {
            'BlueprintGrid [layout]': {
              'BlueprintReveal [motion]': {
                'stagger': 150,
                'duration': 700,
                'converge': 0.35,
                'Illustration SVG ×4': 'UspGridSystem, UspAnalogForDigital, UspQuietLuxury, UspBlueprintAesthetic',
              },
            },
            'Typography h5 (label)': 'USP 라벨 (e.g. "5mm Grid System")',
            'Typography body1 (description)': 'USP 설명 — wordBreak keep-all, first-letter drop cap',
          },
        },
      },
      'ProductLinesSection [section]': {
        'LineGrid [layout] (outer)': {
          'gap': 0,
          'borderColor': 'common.white',
          'color': 'common.white',
          'svg filter': 'brightness(0) invert(1)',
        },
        'Title [typography]': '"Three Lines of Tools" — h1',
        'ProductLineBlock ×3 [component] (GRID, INK, FOLIO)': {
          'LineGrid [layout]': {
            'gap': 0,
            'borderColor': 'common.white',
          },
          'Typography h3 (lineName)': '"GRID" "INK" "FOLIO" — common.white',
          'Typography body1 (concept)': 'concept — rgba(255,255,255,0.7)',
          'LineGrid [layout] (3-col products, container)': {
            'Grid size': '{ xs:12, sm:4 }',
            'ProductCard ×3 [component]': {
              'BlueprintGrid [layout]': {
                'color': '#ffffff',
                'opacity': 0.08,
                'BlueprintReveal [motion]': {
                  'stagger': 120,
                  'duration': 600,
                  'converge': 0.35,
                  'Illustration SVG ×9': 'GridNotebookA5, GridMemoPad, DeskMat, RollerballPen, FountainPen, InkCartridgeSet, LeatherBinderA5, DocumentFolder, CardWallet',
                },
              },
              'Typography h5 (name)': '제품명 — common.white',
              'Typography body1 (description)': '제품 설명 — rgba(255,255,255,0.7), first-letter drop cap',
            },
          },
        },
      },
    },
    'footer → CtaSection [section]': {
      'FullPageContainer [layout]': {
        'bgcolor': '#111111',
        'align': 'center',
        'justify': 'center',
      },
      'PageContainer [layout]': {
        'px': 'widePx (xs:3, sm:6, md:12, lg:20)',
        'textAlign': 'center',
      },
      'Typography overline': '"DRAFT." — rgba(255,255,255,0.5), letterSpacing 0.15em',
      'Typography h1': '"Write Thoughts as You Draw Blueprints." — common.white',
      'Typography body1': 'closingMessage — rgba(255,255,255,0.7), maxWidth 45ch, wordBreak keep-all',
      'Button outlined': 'ctaText — Doto monospace, white → invert on hover, px:10 py:2.5',
      'Divider': 'rgba(255,255,255,0.2)',
      'Typography caption': '"DRAFT. — WRITE THE BLUEPRINT." — rgba(255,255,255,0.4)',
    },
  },
};

/** DraftLanding 컴포넌트 계층 — TreeNode 트리 탐색기 */
export const Default = {
  render: () => (
    <>
      <DocumentTitle
        title="Component Hierarchy"
        status="Reference"
        note="DraftLanding 페이지의 전체 컴포넌트 계층 구조"
        brandName="DRAFT."
        systemName="Starter Kit"
        version="1.0"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          DraftLanding — Component Hierarchy
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 3 } }>
          클릭하여 펼치기/접기 | Page → Template → Section → Component → Element |{ ' ' }
          <code>src/components/templates/DraftLanding.jsx</code>
        </Typography>

        <Box sx={ { p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 } }>
          <Box sx={ { fontFamily: 'monospace' } }>
            <TreeNode
              keyName="DraftLanding [page]"
              value={ hierarchy }
              depth={ 0 }
              defaultOpen={ false }
            />
          </Box>
        </Box>

        <Divider sx={ { my: 3 } } />

        <Typography variant="body2" color="text.secondary">
          키 이름의 <code>[tag]</code>는 계층 레벨을 나타냅니다:
          page, template, section, component, layout, typography, motion, dynamic-color, element.
        </Typography>
      </PageContainer>
    </>
  ),
};

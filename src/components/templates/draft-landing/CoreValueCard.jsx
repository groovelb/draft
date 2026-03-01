import { Box, Typography } from '@mui/material';
import LineGrid from '../../layout/LineGrid';
import BlueprintReveal from '../../motion/BlueprintReveal';

/**
 * CoreValueCard 컴포넌트
 *
 * 개별 Core Value를 넘버링+영어타이틀, 일러스트, 한글라벨, 설명으로 구성한다.
 * 각 영역이 LineGrid 수평선으로 구분되며 반응형 패딩을 갖는다.
 *
 * 시각적 구조 (위→아래, 수평선 구분):
 * ┌─────────────────┐
 * │ 01  PRECISION   │  ← 넘버링 + 영어 타이틀 (같은 행)
 * ├─────────────────┤
 * │                 │
 * │   [일러스트]     │  ← BlueprintReveal 조립 트랜지션
 * │                 │
 * ├─────────────────┤
 * │ 정밀함           │
 * │ 설명 텍스트       │  ← 한글 라벨 + 설명
 * └─────────────────┘
 *
 * Props:
 * @param {React.ComponentType} Illustration - 일러스트 SVG 컴포넌트 [Required]
 * @param {number} index - 0부터 시작하는 인덱스 (넘버링용) [Required]
 * @param {string} title - 영어 타이틀 키 (e.g. 'precision') [Required]
 * @param {string} label - 가치 라벨 (한글) [Required]
 * @param {string} description - 가치 설명 [Required]
 *
 * Example usage:
 * <CoreValueCard Illustration={ ValuePrecision } index={ 0 } title="precision" label="정밀함" description="..." />
 */
export function CoreValueCard({ Illustration, index, title, label, description }) {
  return (
    <LineGrid gap={ 0 } borderColor="text.primary">
      <Box
        sx={ {
          px: { xs: 3, sm: 4, md: 5 },
          py: { xs: 4, sm: 5, md: 6 },
          display: 'flex',
          alignItems: 'baseline',
          gap: { xs: 1.5, sm: 2 },
        } }
      >
        <Typography
          variant="h2"
          sx={ { color: 'primary.main' } }
        >
          { `0${index + 1}` }
        </Typography>
        <Typography
          variant="h2"
          sx={ { color: 'text.primary' } }
        >
          { title.toUpperCase() }
        </Typography>
      </Box>

      <Box sx={ { px: { xs: 3, sm: 4, md: 5 }, py: { xs: 3, sm: 4, md: 5 } } }>
        <BlueprintReveal
          stagger={ 150 }
          duration={ 700 }
          converge={ 0.4 }
        >
          <Illustration
            style={ {
              width: '100%',
              height: 'auto',
              display: 'block',
              aspectRatio: '1 / 1',
            } }
            aria-label={ label }
          />
        </BlueprintReveal>
      </Box>

      <Box sx={ { px: { xs: 3, sm: 4, md: 5 }, py: { xs: 3, sm: 4, md: 5 } } }>
        <Typography variant="h4">
          { label }
        </Typography>
        <Typography
          variant="body1"
          sx={ {
            color: 'text.primary',
            mt: 1.5,
            lineHeight: 1.8,
            wordBreak: 'keep-all',
          } }
        >
          { description }
        </Typography>
      </Box>
    </LineGrid>
  );
}

import { Box, Typography } from '@mui/material';
import BlueprintReveal from '../../motion/BlueprintReveal';

/**
 * CoreValueCard 컴포넌트
 *
 * 개별 Core Value를 일러스트, 넘버링, 라벨, 설명과 함께 표시한다.
 * 뷰포트 진입 시 일러스트가 레이어별 조립 트랜지션으로 등장한다.
 *
 * Props:
 * @param {React.ComponentType} Illustration - 일러스트 SVG 컴포넌트 [Required]
 * @param {number} index - 0부터 시작하는 인덱스 (넘버링용) [Required]
 * @param {string} label - 가치 라벨 [Required]
 * @param {string} description - 가치 설명 [Required]
 *
 * Example usage:
 * <CoreValueCard Illustration={ ValuePrecision } index={ 0 } label="정밀함" description="..." />
 */
export function CoreValueCard({ Illustration, index, label, description }) {
  return (
    <Box sx={ { py: { xs: 3, md: 5 }, px: { xs: 1, md: 2 } } }>
      <BlueprintReveal
        stagger={ 150 }
        duration={ 700 }
        converge={ 0.4 }
        sx={ { mb: 4 } }
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

      <Typography
        variant="overline"
        sx={ { color: 'primary.main' } }
      >
        { `0${index + 1}` }
      </Typography>

      <Typography variant="h4" sx={ { mt: 1 } }>
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
  );
}

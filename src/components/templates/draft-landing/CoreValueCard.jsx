import { Box, Typography } from '@mui/material';

/**
 * CoreValueCard 컴포넌트
 *
 * 개별 Core Value를 일러스트, 넘버링, 라벨, 설명과 함께 표시한다.
 *
 * Props:
 * @param {string} illustrationSrc - 일러스트 SVG 경로 [Required]
 * @param {number} index - 0부터 시작하는 인덱스 (넘버링용) [Required]
 * @param {string} label - 가치 라벨 [Required]
 * @param {string} description - 가치 설명 [Required]
 *
 * Example usage:
 * <CoreValueCard illustrationSrc={ src } index={ 0 } label="정밀함" description="..." />
 */
export function CoreValueCard({ illustrationSrc, index, label, description }) {
  return (
    <Box sx={ { py: { xs: 3, md: 5 }, px: { xs: 1, md: 2 } } }>
      <Box
        component="img"
        src={ illustrationSrc }
        alt={ label }
        sx={ {
          width: '100%',
          height: 'auto',
          display: 'block',
          aspectRatio: '1 / 1',
          objectFit: 'contain',
          mb: 4,
        } }
      />

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

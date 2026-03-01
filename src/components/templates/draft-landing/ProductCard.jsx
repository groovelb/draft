import { Box, Typography } from '@mui/material';

/**
 * ProductCard 컴포넌트
 *
 * 개별 제품을 일러스트, 이름, 설명과 함께 표시한다.
 *
 * Props:
 * @param {string} illustrationSrc - 제품 일러스트 SVG 경로 [Required]
 * @param {string} name - 제품명 [Required]
 * @param {string} description - 제품 설명 [Required]
 *
 * Example usage:
 * <ProductCard illustrationSrc={ src } name="Grid Notebook A5" description="..." />
 */
export function ProductCard({ illustrationSrc, name, description }) {
  return (
    <Box>
      <Box
        component="img"
        src={ illustrationSrc }
        alt={ name }
        sx={ { width: '100%', height: 'auto', display: 'block' } }
      />

      <Box sx={ { mt: 3, px: { xs: 0, md: 1 } } }>
        <Typography variant="h5">
          { name }
        </Typography>
        <Typography
          variant="body1"
          sx={ {
            color: 'text.primary',
            mt: 1,
            wordBreak: 'keep-all',
          } }
        >
          { description }
        </Typography>
      </Box>
    </Box>
  );
}

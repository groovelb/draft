import { Box, Typography } from '@mui/material';

/**
 * UspCard 컴포넌트
 *
 * 개별 USP(Unique Selling Point)를 키, 라벨, 설명과 함께 표시한다.
 *
 * Props:
 * @param {string} label - USP 라벨 [Required]
 * @param {string} description - USP 설명 [Required]
 *
 * Example usage:
 * <UspCard label="5mm Grid System" description="..." />
 */
export function UspCard({ label, description }) {
  return (
    <Box sx={ { py: { xs: 4, md: 6 }, px: { xs: 1, md: 2 } } }>
      <Typography variant="h5">
        { label }
      </Typography>

      <Typography
        variant="body1"
        sx={ {
          color: 'text.primary',
          mt: 2.5,
          maxWidth: '50ch',
          lineHeight: 1.8,
          wordBreak: 'keep-all',
        } }
      >
        { description }
      </Typography>
    </Box>
  );
}

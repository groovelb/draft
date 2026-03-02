import { Box, Typography } from '@mui/material';
import BlueprintGrid from '../../layout/BlueprintGrid';
import BlueprintReveal from '../../motion/BlueprintReveal';

/**
 * UspCard 컴포넌트
 *
 * 개별 USP(Unique Selling Point)를 일러스트, 라벨, 설명과 함께 표시한다.
 * 뷰포트 진입 시 일러스트가 레이어별 조립 트랜지션으로 등장한다.
 *
 * Props:
 * @param {React.ComponentType} Illustration - USP 일러스트 SVG 컴포넌트 [Optional]
 * @param {string} label - USP 라벨 [Required]
 * @param {string} description - USP 설명 [Required]
 *
 * Example usage:
 * <UspCard Illustration={ UspGridSystem } label="5mm Grid System" description="..." />
 */
export function UspCard({ Illustration, label, description }) {
  return (
    <Box sx={ { py: { xs: 4, md: 6 }, px: { xs: 1, md: 2 } } }>
      { Illustration && (
        <BlueprintGrid sx={ { mb: 3 } }>
          <BlueprintReveal stagger={ 150 } duration={ 700 } converge={ 0.35 }>
            <Illustration
              style={ { width: '100%', height: 'auto', display: 'block' } }
              aria-label={ label }
            />
          </BlueprintReveal>
        </BlueprintGrid>
      ) }

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
          '&::first-letter': {
            float: 'left',
            fontSize: '3.2em',
            lineHeight: 1,
            fontWeight: 'bold',
            mr: 0.5,
            mt: '0.05em',
          },
        } }
      >
        { description }
      </Typography>
    </Box>
  );
}

import { PageContainer } from '../../layout/PageContainer';
import { SectionContainer } from '../../container/SectionContainer';
import LineGrid from '../../layout/LineGrid';
import { Title } from '../../typography/Title';
import { ProductLineBlock } from './ProductLineBlock';

import GridNotebookA5 from '../../../assets/illustrations/grid-notebook-a5.svg';
import GridMemoPad from '../../../assets/illustrations/grid-memo-pad.svg';
import DeskMat from '../../../assets/illustrations/desk-mat.svg';
import RollerballPen from '../../../assets/illustrations/rollerball-pen.svg';
import FountainPen from '../../../assets/illustrations/fountain-pen.svg';
import InkCartridgeSet from '../../../assets/illustrations/ink-cartridge-set.svg';
import LeatherBinderA5 from '../../../assets/illustrations/leather-binder-a5.svg';
import DocumentFolder from '../../../assets/illustrations/document-folder.svg';
import CardWallet from '../../../assets/illustrations/card-wallet.svg';

/** 제품명 → 일러스트 SVG 매핑 */
const illustrationMap = {
  'Grid Notebook A5': GridNotebookA5,
  'Grid Memo Pad': GridMemoPad,
  'Desk Mat': DeskMat,
  'Rollerball Pen': RollerballPen,
  'Fountain Pen': FountainPen,
  'Ink Cartridge Set': InkCartridgeSet,
  'Leather Binder A5': LeatherBinderA5,
  'Document Folder': DocumentFolder,
  'Card Wallet': CardWallet,
};

/**
 * ProductLinesSection 컴포넌트
 *
 * DraftLanding의 Product Lines 섹션.
 * 3개 라인(GRID, INK, FOLIO)을 각각 3열 제품 그리드로 표시한다.
 *
 * Props:
 * @param {Array} products - 제품 라인 데이터 배열 [Required]
 * @param {number} gridGap - LineGrid gap (px) [Required]
 * @param {object} widePx - 반응형 px 값 [Required]
 *
 * Example usage:
 * <ProductLinesSection products={ data.products } gridGap={ 64 } widePx={ widePx } />
 */
export function ProductLinesSection({ products, gridGap, widePx }) {
  return (
    <SectionContainer sx={ { py: { xs: 10, md: 16 } } }>
      <PageContainer sx={ { px: widePx } }>
        <Title
          title="Three Lines of Tools"
          level="h2"
          sx={ { mb: { xs: 6, md: 10 } } }
        />

        <LineGrid gap={ gridGap } borderColor="primary.main">
          { products.map((line) => (
            <ProductLineBlock
              key={ line.line }
              lineName={ line.line }
              concept={ line.concept }
              items={ line.items }
              illustrationMap={ illustrationMap }
              gridGap={ gridGap }
            />
          )) }
        </LineGrid>
      </PageContainer>
    </SectionContainer>
  );
}

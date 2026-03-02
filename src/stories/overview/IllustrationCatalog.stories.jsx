import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {
  DocumentTitle,
  PageContainer,
  SectionTitle,
} from '../../components/storybookDocumentation';
import BlueprintGrid from '../../components/layout/BlueprintGrid';
import {
  GridNotebookA5,
  GridMemoPad,
  DeskMat,
  RollerballPen,
  FountainPen,
  InkCartridgeSet,
  LeatherBinderA5,
  DocumentFolder,
  CardWallet,
  ValuePrecision,
  ValueOrigin,
  ValueRestraint,
  ValueCraft,
  UspGridSystem,
  UspAnalogForDigital,
  UspQuietLuxury,
  UspBlueprintAesthetic,
  BrandHero,
} from '../../assets/illustrations';

export default {
  title: 'Overview/Illustration Catalog',
  parameters: {
    layout: 'padded',
  },
};

/** 일러스트 카드 (SVG + 파일명 + 사용처) */
function IllustrationCard({ Svg, fileName, usedIn }) {
  return (
    <Box sx={ { textAlign: 'center' } }>
      <BlueprintGrid
        sx={ {
          p: 2,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          mb: 1.5,
        } }
      >
        <Svg style={ { width: '100%', height: 'auto', display: 'block' } } />
      </BlueprintGrid>
      <Typography variant="caption" sx={ { fontFamily: 'monospace', display: 'block' } }>
        { fileName }
      </Typography>
      <Typography variant="caption" color="text.secondary">
        { usedIn }
      </Typography>
    </Box>
  );
}

/** 제품 라인 서브그리드 */
function ProductLineGroup({ lineName, items }) {
  return (
    <Box sx={ { mb: 3 } }>
      <Typography
        variant="subtitle2"
        sx={ { fontWeight: 700, mb: 1.5, fontFamily: '"Doto", monospace' } }
      >
        { lineName }
      </Typography>
      <Grid container spacing={ 3 }>
        { items.map(({ Svg, fileName }) => (
          <Grid size={ { xs: 6, sm: 4 } } key={ fileName }>
            <IllustrationCard Svg={ Svg } fileName={ fileName } usedIn="ProductCard" />
          </Grid>
        )) }
      </Grid>
    </Box>
  );
}

export const Default = {
  render: () => (
    <>
      <DocumentTitle
        title="Illustration Catalog"
        status="Available"
        note="18 Blueprint SVG illustrations"
        brandName="DRAFT."
        systemName="Starter Kit"
        version="1.0"
      />
      <PageContainer>
        { /* ── Products (9) ── */ }
        <SectionTitle
          title="Products (9)"
          description="3개 제품 라인 × 3개 제품. ProductCard / ProductLineBlock에서 사용."
        />

        <ProductLineGroup
          lineName="GRID"
          items={ [
            { Svg: GridNotebookA5, fileName: 'grid-notebook-a5.svg' },
            { Svg: GridMemoPad, fileName: 'grid-memo-pad.svg' },
            { Svg: DeskMat, fileName: 'desk-mat.svg' },
          ] }
        />
        <ProductLineGroup
          lineName="INK"
          items={ [
            { Svg: RollerballPen, fileName: 'rollerball-pen.svg' },
            { Svg: FountainPen, fileName: 'fountain-pen.svg' },
            { Svg: InkCartridgeSet, fileName: 'ink-cartridge-set.svg' },
          ] }
        />
        <ProductLineGroup
          lineName="FOLIO"
          items={ [
            { Svg: LeatherBinderA5, fileName: 'leather-binder-a5.svg' },
            { Svg: DocumentFolder, fileName: 'document-folder.svg' },
            { Svg: CardWallet, fileName: 'card-wallet.svg' },
          ] }
        />

        { /* ── Core Values (4) ── */ }
        <SectionTitle
          title="Core Values (4)"
          description="4개 핵심 가치 일러스트. CoreValueCard에서 사용."
        />
        <Grid container spacing={ 3 }>
          { [
            { Svg: ValuePrecision, fileName: 'value-precision.svg', key: 'precision' },
            { Svg: ValueOrigin, fileName: 'value-origin.svg', key: 'origin' },
            { Svg: ValueRestraint, fileName: 'value-restraint.svg', key: 'restraint' },
            { Svg: ValueCraft, fileName: 'value-craft.svg', key: 'craft' },
          ].map(({ Svg, fileName, key }) => (
            <Grid size={ { xs: 6, sm: 3 } } key={ key }>
              <IllustrationCard Svg={ Svg } fileName={ fileName } usedIn="CoreValueCard" />
            </Grid>
          )) }
        </Grid>

        { /* ── USP (4) ── */ }
        <SectionTitle
          title="USP (4)"
          description="4개 USP 추상 일러스트. UspCard에서 사용."
        />
        <Grid container spacing={ 3 }>
          { [
            { Svg: UspGridSystem, fileName: 'usp-grid-system.svg', key: 'grid-system' },
            { Svg: UspAnalogForDigital, fileName: 'usp-analog-for-digital.svg', key: 'analog' },
            { Svg: UspQuietLuxury, fileName: 'usp-quiet-luxury.svg', key: 'luxury' },
            { Svg: UspBlueprintAesthetic, fileName: 'usp-blueprint-aesthetic.svg', key: 'aesthetic' },
          ].map(({ Svg, fileName, key }) => (
            <Grid size={ { xs: 6, sm: 3 } } key={ key }>
              <IllustrationCard Svg={ Svg } fileName={ fileName } usedIn="UspCard" />
            </Grid>
          )) }
        </Grid>

        { /* ── Brand (1) ── */ }
        <SectionTitle
          title="Brand (1)"
          description="브랜드 히어로 일러스트. BrandStorySection에서 사용."
        />
        <Grid container spacing={ 3 }>
          <Grid size={ { xs: 12, sm: 6 } }>
            <IllustrationCard Svg={ BrandHero } fileName="brand-hero.svg" usedIn="BrandStorySection" />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  ),
};

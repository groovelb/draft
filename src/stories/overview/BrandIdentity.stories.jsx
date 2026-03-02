import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {
  DocumentTitle,
  PageContainer,
  TreeNode,
} from '../../components/storybookDocumentation';
import brandData from '../../docs/brand-draft.json';

export default {
  title: 'Overview/Brand Identity',
  parameters: {
    layout: 'padded',
  },
};

/** 브랜드 아이덴티티 - brand-draft.json 트리 탐색기 */
export const Default = {
  render: () => {
    const brandStructure = {
      brand: brandData.brand,
      coreValues: Object.fromEntries(
        brandData.coreValues.map((v) => [
          v.key,
          { label: v.label, description: v.description },
        ])
      ),
      message: brandData.message,
      usp: Object.fromEntries(
        brandData.usp.map((u) => [
          u.key,
          { label: u.label, description: u.description },
        ])
      ),
      products: Object.fromEntries(
        brandData.products.map((line) => [
          line.line,
          {
            concept: line.concept,
            ...Object.fromEntries(
              line.items.map((item) => [
                item.name,
                item.description,
              ])
            ),
          },
        ])
      ),
    };

    return (
      <>
        <DocumentTitle
          title="Brand Identity"
          status="Available"
          note="brand-draft.json explorer"
          brandName="DRAFT."
          systemName="Starter Kit"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Brand Identity
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={ { mb: 3 } }>
            클릭하여 펼치기/접기 | <code>src/docs/brand-draft.json</code>
          </Typography>

          <Box sx={ { p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 } }>
            <Box sx={ { fontFamily: 'monospace' } }>
              { Object.entries(brandStructure).map(([key, value]) => (
                <TreeNode
                  key={ key }
                  keyName={ key }
                  value={ value }
                  depth={ 0 }
                  defaultOpen={ false }
                />
              )) }
            </Box>
          </Box>

          <Divider sx={ { my: 3 } } />

          <Typography variant="body2" color="text.secondary">
            DRAFT. 브랜드의 핵심 정체성, 메시지, USP, 제품 라인을 탐색합니다.
          </Typography>
        </PageContainer>
      </>
    );
  },
};

import { CardGrid } from '../../card-grid/card-grid';
import { LoadingStripe } from '../../loading-stripe/loading-stripe';

export const AllTrucksSkeleton = () => (
  <CardGrid>
    <CardGrid.Card title={<LoadingStripe />} body={<LoadingStripe />} />
    <CardGrid.Card title={<LoadingStripe />} body={<LoadingStripe />} />
    <CardGrid.Card title={<LoadingStripe />} body={<LoadingStripe />} />
    <CardGrid.Card title={<LoadingStripe />} body={<LoadingStripe />} />
  </CardGrid>
);

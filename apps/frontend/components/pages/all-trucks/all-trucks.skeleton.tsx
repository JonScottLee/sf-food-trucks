import { CardGrid } from '../../card-grid/card-grid';
import { LoadingStripe } from '../../loading-stripe/loading-stripe';
import { Button } from '../../button/button';

const ActionButton = () => <Button>Details</Button>;

const LoadingCard = () => (
  <CardGrid.Card
    title={<LoadingStripe />}
    body={<LoadingStripe />}
    action={<ActionButton />}
  />
);

export const AllTrucksSkeleton = () => (
  <CardGrid>
    <LoadingCard />
    <LoadingCard />
    <LoadingCard />
    <LoadingCard />
    <LoadingCard />
    <LoadingCard />
    <LoadingCard />
    <LoadingCard />
  </CardGrid>
);

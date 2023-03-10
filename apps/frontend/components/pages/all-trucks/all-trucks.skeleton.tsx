import {
  Button,
  CardGrid,
  LoadingStripe,
} from '@sf-food-trucks/frontend-common';

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

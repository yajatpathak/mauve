import { Button } from "@chakra-ui/react";
import StoreURL from "../entities/StoreURL";
import useGameStore from "../gameStore";

interface StoreLinkProps {
  storeURL: StoreURL;
}

function StoreLink({ storeURL }: StoreLinkProps) {
  const stores = useGameStore((s) => s.game.stores);
  const store = stores.find(
    (store) => store.store.id === storeURL.store_id
  )?.store;

  return (
    <a key={store?.id} href={storeURL.url} target="_blank">
      <Button colorScheme="brand" marginTop={1} size="xs" fontWeight="bold">
        {store?.name}
      </Button>
      <br />
    </a>
  );
}

export default StoreLink;

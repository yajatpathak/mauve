import { Button } from "@chakra-ui/react";
import StoreURL from "../entities/StoreURL";
import useGameStore from "../stores/gameStore";

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
      <Button
        colorScheme="brand"
        marginBottom={3}
        marginRight={2}
        size="xs"
        fontWeight="bold"
      >
        {store?.name}
      </Button>
    </a>
  );
}

export default StoreLink;

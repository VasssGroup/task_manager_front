import storeCMS from './cms-store';
import storeShare from './share-store';

class RootStore {
    cms = storeCMS;
    share = storeShare;
}

export default RootStore;
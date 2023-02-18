import { IPFS_BASE_URL } from "../constants";

export function getIPFSImageURL(imageCID: string) {
  return `${IPFS_BASE_URL}/f${(imageCID as string).slice(2)}`;
}

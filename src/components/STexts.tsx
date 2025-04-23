import getTexts from '@/helpers/getTexts';
import { CTexts } from './CTexts';

export default async function STexts() {
  const texts = await getTexts();
  console.log('• getTexts •', { texts });

  return <CTexts />;
}
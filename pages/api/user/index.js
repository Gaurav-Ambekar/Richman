import nc from 'next-connect';
import { getUsers } from '../../../controller/user';
const handler = nc();
handler.get(getUsers)
export default handler
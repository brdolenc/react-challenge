import { Filters, Playlist } from '../../../components/organisms';
import { Layout } from '../../templates';

const Home = () => {
  return (
    <Layout>
      <Filters />
      <Playlist />
    </Layout>
  );
}

export default Home;

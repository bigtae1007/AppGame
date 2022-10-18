import ManagePresenter from './ManagePresenter';

const ManageContainer = ({route, navigation}: any) => {
  const id = route.params?.id;
  return <ManagePresenter id={id} navigation={navigation} />;
};

export default ManageContainer;

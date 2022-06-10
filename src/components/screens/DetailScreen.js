import DetailContainer from "../containers/DetailContainer";

const DetailScreen = ({navigation, route }) => {
    return (
        <DetailContainer route={route} navigation={navigation}/>
    );
    }
export default DetailScreen;
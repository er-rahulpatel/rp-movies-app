import { Image, Text, Center, VStack, Heading, ScrollView } from "native-base";
import { useState, useEffect } from 'react';
import { IMAGE_BASE_URL } from "../../config/api_config";
import { getDetails } from "../../services/api";
import Loading from "../layout/Loading";

const DetailContainer = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { id, mediaType } = route.params;
    const [details, setDetails] = useState();

    // Call the API to get the details
    useEffect(() => {
        setIsLoading(true);
        getDetails(mediaType, id).then(res => {
            setDetails(res);
            navigation.setOptions({
                title: res.title ? res.title : res.name,
            });
            setIsLoading(false);
        }
        ).catch(err => {
            console.log(err);
        }
        );
    }, []);

    return (
        <ScrollView>
            <Center marginTop={4}>
                {
                    isLoading ? <Loading /> :
                        details ?
                            <VStack space={2} alignItems="center" m={6}>
                                <Heading mb={5}>{details.title ? details.title : details.name}</Heading>
                                <Image source={{ uri: `${IMAGE_BASE_URL}/${details.poster_path}` }} alt={details.title ? details.title : details.name} size={"2xl"} />

                                <Text>{details.overview}</Text>
                                <Text mt={4} style={{ alignSelf: 'flex-start' }}>Popularity: {details.popularity} | Release Date: {details.releaseDate}</Text>
                            </VStack>
                            :
                            <Text>No Records Found</Text>

                }
            </Center>
        </ScrollView>

    );
}
export default DetailContainer;
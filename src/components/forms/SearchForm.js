import { Text, Button, CheckIcon, FormControl, HStack, Icon, Input, Select, VStack } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

const SearchForm = ({ callSearchResults }) => {
    const [mediaType, setMediaType] = useState('multi');
    const [inputText, setInputText] = useState('');
    const [isError, setIsError] = useState(false);
    const mediaTypes = ['movie', "multi", "tv"];

    const searchClicked = () => {
        if (inputText.trim() === "") {
            setIsError(true);
            callSearchResults(mediaType, inputText.trim(), true);
        } else {
            setIsError(false);
            callSearchResults(mediaType, inputText.trim(), false);
        }
    }

    return (
        <>
            <VStack marginTop={2} width={"80%"} m={10}>
                <FormControl isRequired>
                    <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
                    <Input placeholder="i.e. James Bond, CSI"
                        InputLeftElement={
                            <Icon as={<Ionicons name="ios-search" />} m={1} />
                        }
                        onChangeText={(text) => setInputText(text)}
                        onEndEditing={(text) => {
                            if (inputText.trim() != "") {
                                setIsError(false);
                            }
                        }}
                        value={inputText}
                    />
                    {isError ? <Text style={{ color: "red" }}>Please enter a search term</Text> : null}
                    <FormControl.Label>Choose Search Type</FormControl.Label>
                    <HStack space={3} alignItems={"center"}>
                        <Select selectedValue={mediaType}
                            onValueChange={(value) => setMediaType(value)}
                            flex={2}
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" color="white" />
                            }}>
                            {mediaTypes.map((option, index) => <Select.Item label={option} value={option} key={index} color={"red"} />)}
                        </Select>
                        <Button startIcon={<Icon as={<Ionicons name="ios-search" />} />} onPress={searchClicked}>Search</Button>
                    </HStack>
                    <FormControl.HelperText>Please select a search type</FormControl.HelperText>
                </FormControl>
            </VStack>
        </>
    );
}

export default SearchForm;
import { Button, Center } from "native-base";

const Footer = ({ setPage }) => {
    return (
        <Center>
            <Button size={"lg"} colorScheme="secondary" onPress={() => setPage((oldPageCount) => oldPageCount + 1)}>Load More</Button>
        </Center>
    );
}
export default Footer;

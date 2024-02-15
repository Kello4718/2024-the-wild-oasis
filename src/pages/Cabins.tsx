import Heading from "../components/Heading";
import Row from "../components/Row";
import CabinTable from "../features/cabins/CabinTable";

const Cabins = () => {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>fILTER SORT</p>
            </Row>
            <Row>
                <CabinTable />
            </Row>
        </>
    );
};

export default Cabins;

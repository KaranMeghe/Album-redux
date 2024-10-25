import { ShimmerTitle } from "react-shimmer-effects";

const Skelleton = ({ times }) => {
    const boxes = [];

    // Ensure `times` is a number, and loop over it
    for (let i = 0; i < times; i++) {
        boxes.push(<ShimmerTitle line={1} gap={10} variant="primary" key={i} />);
    }

    return <>{boxes}</>; // Return the skeletons
};

export default Skelleton;

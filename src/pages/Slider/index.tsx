import styled from 'styled-components';
import { Container } from '../../components/reusable/Layouts';
import Slider from '../../components/Slider/Slider';
import { sliderData } from '../../utils/data';

export type ISilderProps = {
    images: Array<{ id: number; url: string }>;
    transitionType: "ease-in" | 'ease-out' | "ease-in-out" | "linear"
}

const SliderPage = () => {

    return (
        <StyledContainer>
            <Title>Slider Show - Cats</Title>
            <Slider images={sliderData} transitionType='ease-in-out' />
        </StyledContainer>
    );
};

export default SliderPage;

const StyledContainer = styled(Container)`
width: 100%;
`

const Title = styled.h2`
padding:1em;
color:grey`

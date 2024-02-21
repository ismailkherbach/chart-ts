import styled from 'styled-components';
import useImageSlider from '../../hooks/useImageSlider';
import Button from '../reusable/Button';
import { Row } from '../reusable/Layouts';

export type ISilderProps = {
    images: Array<{ id: number; url: string }>;
    transitionType: "ease-in" | 'ease-out' | "ease-in-out" | "linear"
}

const Slider = ({ images, transitionType }: ISilderProps) => {
    const { containerRef, goToNextSlide, goToPrevSlide } = useImageSlider({ images, transitionType });

    return (
        <>
            <StyledContainer>
                {images.length > 0 && (
                    <StyledSlider ref={containerRef}>
                        {images.map((image, index) => (
                            <Image key={index} src={image.url} alt={`slide-${index + 1}`} />
                        ))}
                    </StyledSlider>
                )}
                <PrevButton onClick={goToPrevSlide}>&#10094;</PrevButton>
                <NextButton onClick={goToNextSlide}>&#10095;</NextButton>

            </StyledContainer>
            <Row width='100%'>
                <StyledButton onClick={goToPrevSlide}>Prev</StyledButton>
                <StyledButton onClick={goToNextSlide}>Next</StyledButton>
            </Row>
        </>

    );
};

export default Slider;

const StyledContainer = styled.div`
position: relative;
overflow: hidden;
width: 60em;
height: 30em;
border-radius: 1em;
`
const Image = styled.img`
object-fit: cover;
width: 60em;
height: 30em;
flex: 1 0 100%;
transition: transform 0.5s ease-in-out;
`
const StyledSlider = styled.div`
display: flex;
`
const StyledButton = styled(Button)`
width:12em;
height:3.5em;
border:0.1em solid darkgrey;
color:darkgrey;
margin:2em 0.6em;
border-radius: 0.25em;
`
const NextButton = styled.button`
font-size:2em;
position: absolute;
top: 50%;
transform: translateY(-50%);
background-color: transparent;
border: none;
outline: none;
cursor: pointer;
color: white;
right: 0.625em;
`

const PrevButton = styled.button`
font-size:2em;
position: absolute;
top: 50%;
transform: translateY(-50%);
background-color: transparent;
border: none;
outline: none;
cursor: pointer;
color: white;
left: 0.625em;
`
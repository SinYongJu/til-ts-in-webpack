import styled from "styled-components";
import styledMixin from "../../util/styledMixin";
interface IWrapper {
    maxWidth?: string
    maxHeight?: string
    width?: string
    height?: string
 }

const Wrapper = styled.div<IWrapper>`
    ${styledMixin.setStyledWidth()};
    ${styledMixin.setStyledHeight()};
    ${styledMixin.setStyledMaxHeight()};
    ${styledMixin.setStyledMaxWidth()};
`

export default Wrapper
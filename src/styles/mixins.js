import { css } from "styled-components";

const blind = css`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0 0 0 0);
`;

const mixins = {
  blind,
}

export default mixins;
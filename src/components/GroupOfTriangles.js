import React from 'react'
import styled from 'styled-components'
import Poligons from "../images/Poligons.svg"

const TrianglesContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 25%;
  height: 100%;
  min-height: 800px;
  background-image: url(${Poligons});
  background-size: contain;
  z-index: 0;

`
export default function GroupOftrianles() {
        return (
          <TrianglesContainer />
        )
}

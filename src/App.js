import styled from "styled-components"

import Search from "./components/Search"

const Container = styled.div`
  width: 70%;
  height: 100vh;
  margin: 0 auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
	background: #212D40;

	& div {
		background: #364156;
		color: #E3E3E3;
	}
`

const App = () => {
	return (
		<Container>
			<Search />
		</Container>
	)
}

export default App
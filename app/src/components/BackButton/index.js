import React from 'react';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons'; 

const BackButton = props => (
	<BackContainer
		onPress={() => alert('Você voltou!')}
	>
        <AntDesign name="left" size={20} color="black" />    
	</BackContainer>
);

export default BackButton;
//Ainda to tentando arrumar o posicionamento
const BackContainer = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	border-radius: 50px;
    border: 1px solid grey;
    margin: 2px;
    padding-right: 0px;
    padding-top: 0px;
    align-items: center;
    justify-content: center;
`;
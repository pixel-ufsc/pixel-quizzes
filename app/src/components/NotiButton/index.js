import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons'; 

const BackButton = props => (
	<BackContainer
		onPress={() => alert('Suas notificações!')}
	>
        <Ionicons name="notifications-outline" size={24} color="black" />
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
import React from 'react';
import styled from 'styled-components';

const Button = props => (
	<ButtonContainer
		onPress={() => alert('Hi!')}
		width={props.width}
	>
		<ButtonText>{props.text}</ButtonText>
	</ButtonContainer>
);

export default Button;

const ButtonContainer = styled.TouchableOpacity`
	width: ${props => props.width}%;
	height: 60px;
	padding: 18px;
	border-radius: 20px;	
	background-color: #82327E;
`;

const ButtonText = styled.Text`
	font-size: 15px;
    font-weight: bold;
	color: white;
	text-align: center;
`;
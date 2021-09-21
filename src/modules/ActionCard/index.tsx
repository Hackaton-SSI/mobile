import React from 'react';

import { 
  ActionAddres, 
  ActionName, 
  Container, 
  InstitutionImage, 
  InstitutionName
} from './styles'

export default function ActionCard() {
  return (
    <Container>
        <InstitutionImage 
          source={{uri: 'https://picsum.photos/200'}}
        />
        <InstitutionName>Nome da Instituição</InstitutionName>
        <ActionName>Nome da Ação</ActionName>
        <ActionAddres>Endereço da Ação</ActionAddres>
    </Container>
  )
}

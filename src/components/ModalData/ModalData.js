import React, { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext';
import { Modal, Container, CloseButton, Content, Text } from './styled';
import cancelImg from '../../assets/cancel.png'

const ModalData = ({ id = 'modal', onClose = () => {} }) => {
  const { userData } = useContext(GlobalStateContext)
  
  const handleOutsideClick = (event) => {
    if(event.target.id === id) onClose()
  }

  return(
    <Modal id="modal" onClick={handleOutsideClick}>
      <Container>
        <CloseButton onClick={onClose}><img src={cancelImg} alt="X" /></CloseButton>
        <Content>
          <h2>Dados Cadastrados:</h2>
          <Text>Nome: </Text>
          <i>{userData.name}</i>
          <Text>Sobrenome: </Text>
          <i>{userData.lastName}</i>
          <Text>Email: </Text>
          <i>{userData.email}</i>
          <Text>Data de nacimento: </Text>
          <i>{userData.birthDate}</i>
          <Text>Endereço: </Text>
          <i>{userData.address}</i>
          <Text>Número:</Text>
          <i>{userData.number}</i>
          <Text>Bairro: </Text>
          <i>{userData.neighborhood}</i>
          <Text>Cidade: </Text>
          <i>{userData.city}</i>
          <Text>CEP: </Text>
          <i>{userData.zipCode}</i>
          <Text>Estado: </Text>
          <i>{userData.state}</i>
        </Content>
      </Container>
    </Modal>
  )
}

export default ModalData;